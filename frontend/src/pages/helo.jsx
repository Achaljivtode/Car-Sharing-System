import React, { useState, useEffect } from "react";
import { getBookings, getLoggedInUser } from "../api";
import {
  //   Car,
  //   Users,
  //   Calendar,
  //   Settings,
  //   CreditCard,
  //   Menu,
  //   X,
  ChevronUp,
  MapPin,
  Bell,
} from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";

function Helo() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getBookings();
      if (data) {
        setBookings(data);
      }
      setLoading(false);
    };
    fetchBookings();
  }, []);

  // Logged In user
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getLoggedInUser();
      setUser(userData);
    };
    fetchData();
  }, []);

  const hedData = [
    {
      label: "Total Vehicles",
      value: "124",
      change: "+12%",
      up: true,
    },
    {
      label: "Active Users",
      value: "2,847",
      change: "+18%",
      up: true,
    },
    {
      label: "Total Bookings",
      value: "48",
      change: "-5%",
      up: false,
    },
    { label: "Total Revenue", value: "$12,847", change: "+24%", up: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src={
                    user?.profile_image_url || "https://via.placeholder.com/150"
                  }
                  alt={user?.username || "User"}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{user?.username || "User"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {hedData.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-sm font-medium text-gray-500">
                  {stat.label}
                </h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <span
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.up ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                    <ChevronUp
                      className={`${!stat.up && "rotate-180"} h-4 w-4`}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Activity
              </h3>
              <div className="mt-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vehicle Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pickup Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Drop Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Booking Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              className="h-10 w-10 rounded-full bg-gray-200"
                              src={
                                booking.user_image_url ||
                                "https://via.placeholder.com/150"
                              }
                              alt={booking.user_name}
                            />

                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {booking.user_name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {booking.car_number}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-900">
                            <MapPin size={16} className="mr-1" />
                            {booking.pickup_location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-900">
                            <MapPin size={16} className="mr-1" />
                            {booking.drop_location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              booking.car_status === "available"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "in_use"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.car_status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(booking.booking_date).toLocaleDateString(
                            "en-CA"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Helo;
