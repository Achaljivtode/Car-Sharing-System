// import React, { useState, useEffect } from "react";
// import { getBookings, cancelBooking, getLoggedInUser } from "../api";
// import {
//   //   Car,
//   //   Users,
//   Calendar,
//   //   Settings,
//   //   CreditCard,
//   //   Menu,
//   //   X,
//   Bell,
//   Search,
//   Filter,
//   MoreVertical,
//   Clock,
//   MapPin,
//   CircleDollarSign,
//   //   CalendarCheck,
//   CalendarX,
//   CalendarClock,
// } from "lucide-react";
// import SideBar from "../Components/SideBar/SideBar";
// import { useNavigate } from "react-router-dom";

// function Booking2() {
//   const [selectedFilter, setSelectedFilter] = useState("all");
//   const [searchFilter, setSearchFilter] = useState("");
//   const [bookings, setBookings] = useState([]);
//   const [user, setUser] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const getBookingReports = async () => {
//       const data = await getBookings();
//       if (data) {
//         setBookings(data);
//       }
//     };
//     getBookingReports();
//   }, []);

//   // Logged In user
//   useEffect(() => {
//     const fetchData = async () => {
//       const userData = await getLoggedInUser();
//       setUser(userData);
//     };
//     fetchData();
//   }, []);

//   // const handleCancel = async (bookingId) => {
//   //   const confirmed = window.confirm(
//   //     "Are you sure you want to cancel this booking?"
//   //   );
//   //   if (!confirmed) return; // Stop if user cancels

//   //   const success = await cancelBooking(bookingId);
//   //   if (success) {
//   //     setBookings(
//   //       bookings.filter((booking) =>
//   //         booking.id !== bookingId
//   //           ? { ...booking, car_status: "available" }
//   //           : booking
//   //       )
//   //     ); // Remove booking from UI
//   //   }
//   // };

//   const handleCancel = async (bookingId) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to cancel this booking?"
//     );
//     if (!confirmed) return;

//     const updateBooking = await cancelBooking(bookingId);
//     if (updateBooking) {
//       // setBookings(bookings.filter((booking) => booking.id !== bookingId));

//       setBookings((prevBookings) =>
//         prevBookings.map((booking) =>
//           booking.id === bookingId
//             ? { ...booking, booking_status: "Cancelled" }
//             : booking
//         )
//       );
//     }
//   };
//   // const handleConfirm = (bookingId) => {
//   //   const confirmed = window.confirm(
//   //     "Are you sure you want to confirm this booking?"
//   //   );
//   //   if (!confirmed) return;

//   //   setBookings((prevBookings) =>
//   //     prevBookings.map((booking) =>
//   //       booking.id === bookingId
//   //         ? { ...booking, car_status: "in_use" }
//   //         : booking
//   //     )
//   //   );
//   // };

//   // const getStatusIcon = (status) => {
//   //   switch (status) {
//   //     case "Pending":
//   //       return <CalendarClock className="w-4 h-4 text-yellow-500" />;
//   //     case "Completed":
//   //       return <CalendarX className="w-4 h-4 text-gray-500" />;
//   //     default:
//   //       return <Calendar className="w-4 h-4" />;
//   //   }
//   // };

//   // const getStatusStyle = (status) => {
//   //   switch (status) {
//   //     case "Pending":
//   //       return "bg-yellow-100 text-yellow-800";
//   //     case "Completed":
//   //       return "bg-gray-100 text-gray-800";
//   //     default:
//   //       return "bg-gray-100 text-gray-800";
//   //   }
//   // };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <SideBar />

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4">
//             <h2 className="text-2xl font-semibold text-gray-800">Bookings</h2>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-gray-100 rounded-full">
//                 <Bell size={20} />
//               </button>
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={user?.profile_image_url}
//                   alt={user?.username || "User"}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="font-medium">{user?.username || "User"}</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Bookings Content */}
//         <main className="p-6">
//           {/* Search and Filters */}
//           <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div className="relative">
//               <Search
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 value={searchFilter}
//                 onChange={(e) => setSearchFilter(e.target.value)}
//                 placeholder="Search user..."
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <select
//                   value={selectedFilter}
//                   onChange={(e) => setSelectedFilter(e.target.value)}
//                   className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="all">All Bookings</option>
//                   {/* <option value="active">Active</option> */}
//                   <option value="available">Available</option>
//                   <option value="in_use">In Use</option>
//                 </select>
//                 <Filter
//                   className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//                   size={16}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bookings Table */}
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Booking ID
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     User
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Vehicle
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     From Location
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     TO Location
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th> */}
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {bookings
//                   .filter(
//                     (booking) =>
//                       (selectedFilter === "all" ||
//                         booking.car_status === selectedFilter) && // Apply filter
//                       (searchFilter === "" ||
//                         booking.user_name
//                           .toLowerCase()
//                           .includes(searchFilter.toLowerCase())) // Apply search
//                   )
//                   .map((booking) => (
//                     <tr key={booking.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                         {booking.id}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="  flex items-center ">
//                           {/* <img
//                             className="h-8 w-8 rounded-full"
//                             src={booking.user_image_url}
//                             alt=""
//                           /> */}
//                           {booking?.user_image_url ? (
//                             <img
//                               src={booking.user_image_url}
//                               alt={booking?.user_name || "User"}
//                               className="h-8 w-8 rounded-full object-cover "
//                             />
//                           ) : (
//                             <span className="text-black text-xl font-medium h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400  text-center">
//                               {booking?.user_name
//                                 ?.split(" ") // Split name into words
//                                 .map((word) => word.charAt(0).toUpperCase()) // Get first letter of each word
//                                 .slice(0, 2) // Only take first two initials
//                                 .join("") || "U"}{" "}
//                               {/* Default to 'U' if name is missing */}
//                             </span>
//                           )}
//                           <div className="ml-3">
//                             <div className="text-sm font-medium text-gray-900  ">
//                               {booking.user_name}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <img
//                             className="h-8 w-12 rounded object-cover"
//                             src={booking.car_image_url}
//                             alt=""
//                           />
//                           <div className="ml-3">
//                             <div className="text-sm font-medium text-gray-900">
//                               {booking.car_number}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="ml-3">
//                           <div className="mr-1 text-gray-700">
//                             {booking.pickup_location}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="ml-3">
//                           <div className="mr-1 text-gray-700">
//                             {booking.drop_location}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <span
//                             className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                               booking.booking_status === "Cancelled"
//                                 ? "text-red-500"
//                                 : booking.booking_status === "Completed"
//                                 ? "text-green-500"
//                                 : "text-blue-500"
//                             }`}
//                           >
//                             {booking.booking_status}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-grey-500">
//                         {booking.booking_status === "Booked" ? (
//                           <button
//                             onClick={() => handleCancel(booking.id)}
//                             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                           >
//                             Cancel Booking
//                           </button>
//                         ) : null}
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>

//             {/* Pagination */}
//             {/* <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex-1 flex justify-between sm:hidden">
//                   <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                     Previous
//                   </button>
//                   <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                     Next
//                   </button>
//                 </div>
//                 <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                   <div>
//                     <p className="text-sm text-gray-700">
//                       Showing <span className="font-medium">1</span> to{" "}
//                       <span className="font-medium">3</span> of{" "}
//                       <span className="font-medium">3</span> results
//                     </p>
//                   </div>
//                   <div>
//                     <nav
//                       className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//                       aria-label="Pagination"
//                     >
//                       <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                         <span className="sr-only">Previous</span>
//                         Previous
//                       </button>
//                       <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                         1
//                       </button>
//                       <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                         <span className="sr-only">Next</span>
//                         Next
//                       </button>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Booking2;

import React, { useState, useEffect } from "react";
import { getBookings, cancelBooking, getLoggedInUser } from "../api";
import { Bell, Search, Filter, MapPin, CalendarX } from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";

function Booking2() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getBookingReports = async () => {
      const data = await getBookings();
      if (data) {
        setBookings(data);
      }
    };
    getBookingReports();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getLoggedInUser();
      setUser(userData);
    };
    fetchData();
  }, []);

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
        return "bg-red-100 text-red-800 border-red-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Booked":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />

      <div className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-3xl font-bold  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bookings
            </h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src={user?.profile_image_url}
                  alt={user?.username || "User"}
                  className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                />
                <span className="font-medium">{user?.username || "User"}</span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search user..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Bookings</option>
                <option value="available">Available</option>
                <option value="in_use">In Use</option>
              </select>
              <Filter
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden h-[450px] overflow-y-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      User & Vehicle
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Locations
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {bookings
                    .filter(
                      (booking) =>
                        (selectedFilter === "all" ||
                          booking.car_status === selectedFilter) &&
                        (searchFilter === "" ||
                          booking.user_name
                            .toLowerCase()
                            .includes(searchFilter.toLowerCase()))
                    )
                    .map((booking) => (
                      <tr
                        key={booking.id}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              {booking?.user_image_url ? (
                                <img
                                  src={booking.user_image_url}
                                  alt={booking?.user_name}
                                  className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                                />
                              ) : (
                                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-medium">
                                  {booking?.user_name
                                    ?.split(" ")
                                    .map((word) => word.charAt(0).toUpperCase())
                                    .slice(0, 2)
                                    .join("")}
                                </span>
                              )}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {booking.user_name}
                              </div>
                              <div className="flex items-center mt-1">
                                <img
                                  src={booking.car_image_url}
                                  alt={booking.car_number}
                                  className="h-6 w-8 rounded object-cover mr-2"
                                />
                                <span className="text-sm text-gray-500">
                                  {booking.car_number}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-700">
                              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="text-sm">
                                From: {booking.pickup_location}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="text-sm">
                                To: {booking.drop_location}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                              booking.booking_status
                            )}`}
                          >
                            {booking.booking_status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {booking.booking_status === "Booked" && (
                            <button
                              onClick={() => handleCancel(booking.id)}
                              className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                            >
                              <CalendarX className="w-4 h-4 mr-2" />
                              Cancel
                            </button>
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

export default Booking2;
