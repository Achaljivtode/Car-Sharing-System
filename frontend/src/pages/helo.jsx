import React, { useState, useEffect } from "react";
import {
  getBookings,
  getLoggedInUser,
  fetchCars,
  fetchCustomers,
} from "../api";
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
  const [cars, setCars] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getTotalcars = async () => {
      const data = await fetchCars();
      if (data) {
        setCars(data);
      }
    };
    getTotalcars();
  }, []);

  const Vehicle_count = cars.length;

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchCustomers();
      if (data) {
        setCustomers(data);
      }
    };
    getCustomers();
  }, []);
  const customer_count = customers.length;

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

  const booking_count = bookings.length;
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
      value: Vehicle_count,
    },
    {
      label: "Active Users",
      value: customer_count,
    },
    {
      label: "Total Bookings",
      value: booking_count,
    },
    // { label: "Total Revenue", value: "$12,847", change: "+24%", up: true },
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
                  <p className="text-2xl font-semibold text-green-600">
                    {stat.value}
                  </p>
                  {/* <span
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.up ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                    <ChevronUp
                      className={`${!stat.up && "rotate-180"} h-4 w-4`}
                    />
                  </span> */}
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
                    {bookings
                      .filter((booking) => booking.booking_status === "Booked")
                      .map((booking, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {booking?.user_image_url ? (
                                <img
                                  src={booking.user_image_url}
                                  alt={booking?.user_name || "User"}
                                  className="h-8 w-8 rounded-full object-cover "
                                />
                              ) : (
                                <span className="text-black text-xl font-medium h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400  text-center">
                                  {booking?.user_name
                                    ?.split(" ") // Split name into words
                                    .map((word) => word.charAt(0).toUpperCase()) // Get first letter of each word
                                    .slice(0, 2) // Only take first two initials
                                    .join("") || "U"}{" "}
                                  {/* Default to 'U' if name is missing */}
                                </span>
                              )}

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
                                booking.booking_status === "Booked" &&
                                "text-blue-500"
                              }`}
                            >
                              {booking.booking_status}
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
