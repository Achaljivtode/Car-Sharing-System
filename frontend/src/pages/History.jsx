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
  // console.log();

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

  const userBookings = user
    ? bookings.filter((rental) => {
        console.log("ID:", rental.user, user.id);
        return user.id === rental.user;
      })
    : [];

  // Filter bookings based on `activeItem`
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
      // setBookings(bookings.filter((booking) => booking.id !== bookingId));

      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === bookingId
            ? { ...booking, booking_status: "Cancelled" }
            : booking
        )
      );
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
          {filteredBookings.length > 0 ? (
            filteredBookings.map((rental) => (
              <div
                key={rental.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden mb-6"
              >
                <div className="flex">
                  <div className="flex flex-col justify-center p-2 w-[400px] mr-10">
                    <img
                      src={rental.car_image_url}
                      alt={rental.car_model}
                      className=" h-[200px] w-[400px]"
                    />
                  </div>
                  <div className="w-3/4 p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {rental.car_model}
                    </h3>
                    <div className="w-2/4 mb-10 flex justify-between items-center gap-2 text-gray-600">
                      <div className="flex">
                        <MapPin className="w-4 h-4 m-1" />
                        <span>{rental.pickup_location}</span>
                      </div>
                      <h1>→</h1>
                      <div className="flex">
                        <MapPin className="w-4 h-4 m-1" />
                        <span>{rental.drop_location}</span>
                      </div>

                      {/* <span className="ml-5"><span className="ml-10"><MapPin className="w-4 h-4 m-1" /> {rental.drop_location}</span></span> */}
                    </div>
                    <div className=" w-3/4 grid grid-cols-2 gap-6 my-4">
                      <div className="flex flex-col text-lg text-gray-800">
                        Booking Date:
                        <span className="text-gray-500 text-md">
                          {new Date(rental.booking_date).toLocaleDateString(
                            "en-CA"
                          )}
                        </span>
                      </div>
                      <div className="flex flex-col text-lg text-gray-500">
                        Cost:
                        <span className="text-gray-900 font-semibold text-xl">
                          ${rental.price}
                        </span>
                      </div>
                      <div className="flex flex-col text-lg text-gray-500">
                        Status:
                        <span
                          className={`text-md font-semibold ${
                            rental.booking_status === "Cancelled"
                              ? "text-red-500"
                              : rental.booking_status === "Completed"
                              ? "text-green-500"
                              : "text-blue-500"
                          }`}
                        >
                          {rental.booking_status}
                        </span>
                      </div>
                    </div>

                    {/* Show Cancel Button only if activeItem is 'customer-booking' */}
                    {activeItem === "/customer-booking" &&
                      rental.booking_status === "Booked" && (
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
