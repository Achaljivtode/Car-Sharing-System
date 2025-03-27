import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, Calendar as CalendarIcon } from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
import { getBookings, getLoggedInUser, cancelBooking } from "../api";

function CustomerHistory() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState([]);

  // const [history, setHistory] = useState([
  //   {
  //     id: 1,
  //     name: "Tesla Model 3",
  //     fromLocation: "Downtown Station",
  //     toLocation: "Downtown Station",
  //     startTime: "2024-03-01T10:00:00",
  //     endTime: "2024-03-01T14:00:00",
  //     image:
  //       "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=2000",
  //     totalCost: 100,
  //   },
  //   {
  //     id: 2,
  //     name: "BMW i4",
  //     fromLocation: "Central Park",
  //     toLocation: "Central Park",
  //     startTime: "2024-02-28T09:00:00",
  //     endTime: "2024-02-28T17:00:00",
  //     image:
  //       "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000",
  //     totalCost: 240,
  //   },
  //   {
  //     id: 3,
  //     name: "Audi e-tron",
  //     fromLocation: "Airport Terminal",
  //     toLocation: "Airport Terminal",
  //     startTime: "2024-02-25T12:00:00",
  //     endTime: "2024-02-25T18:00:00",
  //     image:
  //       "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000",
  //     totalCost: 180,
  //   },
  // ]);

  useEffect(() => {
    const myBookings = async () => {
      const data = await getBookings();
      if (data) {
        setBookings(data);
      }
    };
    myBookings();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getLoggedInUser();
      if (data) {
        setUser(data);
      }
    };
    fetchUser();
  });

  const userBookings = bookings.filter((rental) => user.id === rental.user);

  const handleCancel = async (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirmed) return; // Stop if user cancels

    const success = await cancelBooking(bookingId);
    if (success) {
      setBookings(bookings.filter((booking) => booking.id !== bookingId)); // Remove booking from UI
    }
  };
  // const formatTime = (dateString) =>
  //   new Date(dateString).toLocaleTimeString("en-US", {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: true,
  //   });
  // const formatDate = (dateString) =>
  //   new Date(dateString).toLocaleDateString("en-US", {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Fixed) */}
      <SideBar />

      {/* Main Content (Scrollable) */}
      <div className="flex flex-col w-full h-screen">
        {/* Header (Non-Scrolling) */}
        <div className="p-6 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">My Booking</h2>
          <p className="text-gray-600">View your past booking</p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {userBookings.length > 0 ? (
            userBookings.map((rental) => (
              <div
                key={rental.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden mb-6"
              >
                <div className="flex">
                  <div className="w-1/4">
                    <img
                      src={rental.car_image_url}
                      alt={rental.car_model}
                      className="h-[250px] w-full object-cover"
                    />
                  </div>
                  <div className="w-3/4 p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {rental.car_model}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 m-1" />
                      <span>{rental.pickup_location}</span>
                      <span className="ml-5">→ {rental.drop_location}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-6 my-4">
                      <div className="flex flex-col text-lg text-gray-500">
                        Booking Date:{" "}
                        <span className="text-gray-700  font-semibold text-xl">
                          {rental.booking_date}
                        </span>
                      </div>

                      <div className="flex flex-col text-lg text-gray-500">
                        Cost:{" "}
                        <span className="text-gray-900  font-semibold  text-xl">
                          ${rental.price}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCancel(rental.id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No booking history found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerHistory;
