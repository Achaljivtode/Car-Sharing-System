import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { getAllBookingReports } from "../api";

function AllBookingReport() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBookings() {
      const bookingData = await getAllBookingReports();
      console.log("fetched all booking Reports :", bookingData);
      if (bookingData) {
        setBookings(bookingData);
      }
    }
    getBookings();
  }, []);

  return (
    <div>
      <Header />
      <div className="border-y-3 border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10">
        <h1 className="text-2xl font-semibold my-2 text-orange-400">
          All Booking Reports
        </h1>
        <hr />
        {bookings.length > 0 ? (
          <table className="w-full mt-15">
            <thead>
              <tr>
                <th className="border p-2 bg-orange-500 text-white">
                  Booking Id
                </th>
                <th className="border p-2 bg-orange-500 text-white">
                  customer Name
                </th>
                <th className="border p-2 bg-orange-500 text-white">
                  customer Email
                </th>
                <th className="border p-2 bg-orange-500 text-white">
                  Customer contact
                </th>
                <th className="border p-2 bg-orange-500 text-white">
                  Booking date
                </th>
                <th className="border p-2 bg-orange-500 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="border border-orange-200 p-2 text-center ">
                    {booking.id}
                  </td>
                  <td className="border border-orange-200 p-2 text-center ">
                    {booking.user_name}
                  </td>
                  <td className="border border-orange-200 p-2 text-center ">
                    {booking.user_email}
                  </td>
                  <td className="border border-orange-200 p-2 text-center ">
                    {booking.user_contact}
                  </td>
                  <td className="border border-orange-200 p-2 text-center ">
                    {booking.booking_date}
                  </td>
                  <td className="border border-orange-200 p-2 text-center ">
                    <button
                      onClick={() => navigate(`/booking-details/${booking.id}`)}
                      className="bg-green-500 text-white p-2 rounded-md hover:cursor-pointer hover:bg-green-600"
                    >
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 mt-5">No bookings found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default AllBookingReport;
