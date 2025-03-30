// import React, { useState, useEffect } from "react";
// import {
//   getBookings,
//   getLoggedInUser,
//   fetchCars,
//   fetchCustomers,
// } from "../api";
// import {
//   //   Car,
//   //   Users,
//   //   Calendar,
//   //   Settings,
//   //   CreditCard,
//   //   Menu,
//   //   X,
//   ChevronUp,
//   MapPin,
//   Bell,
// } from "lucide-react";
// import SideBar from "../Components/SideBar/SideBar";

// function Helo() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const [cars, setCars] = useState([]);
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const getTotalcars = async () => {
//       const data = await fetchCars();
//       if (data) {
//         setCars(data);
//       }
//     };
//     getTotalcars();
//   }, []);

//   const Vehicle_count = cars.length;

//   useEffect(() => {
//     const getCustomers = async () => {
//       const data = await fetchCustomers();
//       if (data) {
//         setCustomers(data);
//       }
//     };
//     getCustomers();
//   }, []);
//   const customer_count = customers.length;

//   useEffect(() => {
//     const fetchBookings = async () => {
//       const data = await getBookings();
//       if (data) {
//         setBookings(data);
//       }
//       setLoading(false);
//     };
//     fetchBookings();
//   }, []);

//   const booking_count = bookings.length;
//   // Logged In user
//   useEffect(() => {
//     const fetchData = async () => {
//       const userData = await getLoggedInUser();
//       setUser(userData);
//     };
//     fetchData();
//   }, []);

//   const hedData = [
//     {
//       label: "Total Vehicles",
//       value: Vehicle_count,
//     },
//     {
//       label: "Active Users",
//       value: customer_count,
//     },
//     {
//       label: "Total Bookings",
//       value: booking_count,
//     },
//     // { label: "Total Revenue", value: "$12,847", change: "+24%", up: true },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <SideBar />

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4">
//             <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-gray-100 rounded-full">
//                 <Bell size={20} />
//               </button>
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={
//                     user?.profile_image_url || "https://via.placeholder.com/150"
//                   }
//                   alt={user?.username || "User"}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="font-medium">{user?.username || "User"}</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="p-6">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             {hedData.map((stat) => (
//               <div key={stat.label} className="bg-white rounded-lg shadow p-6">
//                 <h3 className="text-sm font-medium text-gray-500">
//                   {stat.label}
//                 </h3>
//                 <div className="mt-2 flex items-baseline">
//                   <p className="text-2xl font-semibold text-green-600">
//                     {stat.value}
//                   </p>
//                   {/* <span
//                     className={`ml-2 flex items-baseline text-sm font-semibold ${
//                       stat.up ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {stat.change}
//                     <ChevronUp
//                       className={`${!stat.up && "rotate-180"} h-4 w-4`}
//                     />
//                   </span> */}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Recent Activity */}
//           <div className="bg-white rounded-lg shadow">
//             <div className="p-6">
//               <h3 className="text-lg font-medium text-gray-900">
//                 Recent Activity
//               </h3>
//               <div className="mt-6">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         User
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Vehicle Number
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Pickup Location
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Drop Location
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Booking Date
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {bookings
//                       .filter((booking) => booking.booking_status === "Booked")
//                       .map((booking, index) => (
//                         <tr key={index}>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               {booking?.user_image_url ? (
//                                 <img
//                                   src={booking.user_image_url}
//                                   alt={booking?.user_name || "User"}
//                                   className="h-8 w-8 rounded-full object-cover "
//                                 />
//                               ) : (
//                                 <span className="text-black text-xl font-medium h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400  text-center">
//                                   {booking?.user_name
//                                     ?.split(" ") // Split name into words
//                                     .map((word) => word.charAt(0).toUpperCase()) // Get first letter of each word
//                                     .slice(0, 2) // Only take first two initials
//                                     .join("") || "U"}{" "}
//                                   {/* Default to 'U' if name is missing */}
//                                 </span>
//                               )}

//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">
//                                   {booking.user_name}
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900">
//                               {booking.car_number}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center text-sm text-gray-900">
//                               <MapPin size={16} className="mr-1" />
//                               {booking.pickup_location}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center text-sm text-gray-900">
//                               <MapPin size={16} className="mr-1" />
//                               {booking.drop_location}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span
//                               className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                                 booking.booking_status === "Booked" &&
//                                 "text-blue-500"
//                               }`}
//                             >
//                               {booking.booking_status}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {new Date(booking.booking_date).toLocaleDateString(
//                               "en-CA"
//                             )}
//                           </td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Helo;

import React, { useState, useEffect } from "react";
import {
  getBookings,
  getLoggedInUser,
  fetchCars,
  fetchCustomers,
} from "../api";
import { ChevronUp, MapPin, Bell, Car, Users, Calendar } from "lucide-react";
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
      icon: <Car className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      label: "Active Users",
      value: customer_count,
      icon: <Users className="w-6 h-6 text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      label: "Total Bookings",
      value: booking_count,
      icon: <Calendar className="w-6 h-6 text-purple-500" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h2>
            <div className="flex items-center space-x-6">
              <button className="p-2 hover:bg-gray-100 rounded-full relative transition-all duration-200">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 bg-gray-50 py-2 px-4 rounded-full">
                <img
                  src={
                    user?.profile_image_url || "https://via.placeholder.com/150"
                  }
                  alt={user?.username || "User"}
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                />
                <span className="font-medium text-gray-700">
                  {user?.username || "User"}
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 flex-1 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hedData.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.bgColor} rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  {stat.label}
                </h3>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">
                Recent Activity
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Overview of latest bookings
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "User",
                      "Vehicle Number",
                      "Pickup Location",
                      "Drop Location",
                      "Status",
                      "Booking Date",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {bookings
                    .filter((booking) => booking.booking_status === "Booked")
                    .map((booking, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {booking?.user_image_url ? (
                              <img
                                src={booking.user_image_url}
                                alt={booking?.user_name || "User"}
                                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                              />
                            ) : (
                              <span className="flex items-center justify-center text-white text-xl font-medium h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                                {booking?.user_name
                                  ?.split(" ")
                                  .map((word) => word.charAt(0).toUpperCase())
                                  .slice(0, 2)
                                  .join("") || "U"}
                              </span>
                            )}
                            <div className="ml-4">
                              <div className="text-sm font-semibold text-gray-900">
                                {booking.user_name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {booking.car_number}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            {booking.pickup_location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            {booking.drop_location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-50 text-blue-600">
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
        </main>
      </div>
    </div>
  );
}

export default Helo;
