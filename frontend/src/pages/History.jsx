import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Calendar, DollarSign, Tag, ArrowRight } from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
import { getBookings, getLoggedInUser, cancelBooking } from "../api";

function CustomerHistory() {
  // const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState([]);

  const location = useLocation();
  const activeItem = location.state?.activeItem || "No active item received";

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

  const userBookings = user
    ? bookings.filter((rental) => {
        console.log("ID:", rental.user, user.id);
        return user.id === rental.user;
      })
    : [];

  const filteredBookings =
    activeItem === "/customer-booking"
      ? userBookings.filter((rental) => rental.booking_status === "Booked")
      : activeItem === "/Customer-History"
      ? userBookings.filter(
          (rental) =>
            rental.booking_status === "Completed" ||
            rental.booking_status === "Cancelled"
        )
      : userBookings;

  const handleCancel = async (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirmed) return;

    const updateBooking = await cancelBooking(bookingId);
    if (updateBooking) {
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === bookingId
            ? { ...booking, booking_status: "Cancelled" }
            : booking
        )
      );
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <SideBar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="p-8 bg-white shadow-sm border-b">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            My Bookings
          </h2>
          <p className="text-gray-500 mt-2">View and manage your car rentals</p>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {filteredBookings.length > 0 ? (
            <div className="grid gap-6">
              {filteredBookings.map((rental) => (
                <div
                  key={rental.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-[400px] relative overflow-hidden">
                      <img
                        src={rental.car_image_url}
                        alt={rental.car_model}
                        className="h-[250px] w-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-4 py-2 rounded-full border ${getStatusColor(
                            rental.booking_status
                          )}`}
                        >
                          {rental.booking_status}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {rental.car_model}
                      </h3>

                      <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="w-5 h-5" />
                            <span>{rental.pickup_location}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="w-5 h-5" />
                            <span>{rental.drop_location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Booking Date
                            </p>
                            <p className="font-medium">
                              {new Date(rental.booking_date).toLocaleDateString(
                                "en-CA"
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-500">Total Cost</p>
                            <p className="font-bold text-xl">${rental.price}</p>
                          </div>
                        </div>
                      </div>

                      {activeItem === "/customer-booking" &&
                        rental.booking_status === "Booked" && (
                          <button
                            onClick={() => handleCancel(rental.id)}
                            className="mt-6 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
                          >
                            Cancel Booking
                          </button>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Tag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No booking history found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerHistory;
