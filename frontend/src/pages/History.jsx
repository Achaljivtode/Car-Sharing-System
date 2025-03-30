import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
import { getBookings, getLoggedInUser, cancelBooking } from "../api";

function CustomerHistory() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState([]);

  const location = useLocation();
  const activeItem = location.state?.activeItem || "No active item received";
  console.log(activeItem);

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
  }, []);

  // const userBookings = bookings.filter(
  //   (rental) => user.id === rental.user
  // );
  // console.log(user.id);

  const userBookings = bookings.filter((rental) => {
    console.log("ID:", rental.user, user.id);
    return user.id === rental.user;
  });

  const handleCancel = async (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirmed) return;

    const success = await cancelBooking(bookingId);
    if (success) {
      setBookings(bookings.filter((booking) => booking.id !== bookingId));
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col w-full h-screen">
        <div className="p-6 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">My Booking</h2>
          <p className="text-gray-600">View your past booking</p>
        </div>
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {userBookings.length > 0 ? (
            userBookings.map((rental) => (
              <div
                key={rental.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden mb-6"
              >
                <div className="flex">
                  <div className="p-2 w-1/4">
                    <img
                      src={rental.car_image_url}
                      alt={rental.car_model}
                      className="h-[200px] w-[350px]"
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
                        Booking Date:
                        <span className="text-gray-700 font-semibold text-xl">
                          {rental.booking_date}
                        </span>
                      </div>
                      <div className="flex flex-col text-lg text-gray-500">
                        Cost:
                        <span className="text-gray-900 font-semibold text-xl">
                          ${rental.price}
                        </span>
                      </div>
                    </div>

                    {/* Show Cancel Button only if activeItem is 'customer-booking' */}
                    {activeItem === "/customer-booking" && (
                      <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        onClick={() => handleCancel(rental.id)}
                      >
                        Cancel Booking
                      </button>
                    )}
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
