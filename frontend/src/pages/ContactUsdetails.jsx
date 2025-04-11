// import React, { useState, useEffect } from "react";
// import { fetchCustomers, deleteCustomer, getLoggedInUser } from "../api";

// import {
//   Car,
//   Users,
//   Calendar,
//   Settings,
//   CreditCard,
//   Menu,
//   X,
//   ChevronUp,
//   MapPin,
//   Bell,
//   Search,
//   Filter,
//   MoreVertical,
//   Mail,
//   Phone,
//   Shield,
// } from "lucide-react";
// import SideBar from "../Components/SideBar/SideBar";

// function User() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [selectedFilter, setSelectedFilter] = useState("all");
//   const [searchFilter, setSearchFilter] = useState("");
//   const [users, setUsers] = useState([]);
//   const [admin, setAdmin] = useState(null);
//   console.log(users);

//   useEffect(() => {
//     const getCustomers = async () => {
//       const data = await fetchCustomers();
//       if (data) {
//         setUsers(data);
//       }
//     };
//     getCustomers();
//   }, []);

//   // Logged In user
//   useEffect(() => {
//     const fetchData = async () => {
//       const userData = await getLoggedInUser();
//       setAdmin(userData);
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (customerId) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this user"
//     );
//     if (!confirmed) return;

//     const success = await deleteCustomer(customerId);
//     if (success) {
//       setUsers(users.filter((user) => user.id !== customerId));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <SideBar />

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4">
//             <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-gray-100 rounded-full">
//                 <Bell size={20} />
//               </button>
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={admin?.profile_image_url}
//                   alt={admin?.username || "User"}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="font-medium">{admin?.username || "User"}</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Users Content */}
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
//                 placeholder="Search users..."
//                 value={searchFilter}
//                 onChange={(e) => setSearchFilter(e.target.value)}
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
//                   <option value="all">All Users</option>
//                   <option value="active">Active</option>
//                   <option value="inactive">Inactive</option>
//                   <option value="pending">Pending</option>
//                 </select>
//                 <Filter
//                   className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//                   size={16}
//                 />
//               </div>
//               {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                 Add User
//               </button> */}
//             </div>
//           </div>

//           {/* Users Table */}
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     User
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Email
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Contact
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     DOB
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {users
//                   .filter((user) =>
//                     user.full_name
//                       .toLowerCase()
//                       .includes(searchFilter.toLowerCase())
//                   )
//                   .map((user, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           {user?.user_image_url ? (
//                             <img
//                               src={user.user_image_url}
//                               alt={user?.full_name || "User"}
//                               className="h-8 w-8 rounded-full object-cover "
//                             />
//                           ) : (
//                             <span className="text-black text-xl font-medium h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400  text-center">
//                               {user?.full_name
//                                 ?.split(" ") // Split name into words
//                                 .map((word) => word.charAt(0).toUpperCase()) // Get first letter of each word
//                                 .slice(0, 2) // Only take first two initials
//                                 .join("") || "U"}{" "}
//                               {/* Default to 'U' if name is missing */}
//                             </span>
//                           )}
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               {user.full_name}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         {user.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {user.phone_number}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {user.dob}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <button
//                           onClick={() => handleDelete(user.id)}
//                           className="bg-red-500 text-white p-2 rounded-md hover:cursor-pointer"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default User;

import React, { useState, useEffect } from "react";
import {
  fetchCustomers,
  fetchEnquiries,
  deleteEnquiry,
  getLoggedInUser,
} from "../api";
import {
  Bell,
  Search,
  Filter,
  Trash2,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";

function ContactUsdetails() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [enquiries, setEnquiry] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchCustomers();
      if (data) {
        setUsers(data);
      }
    };
    getCustomers();
  }, []);

  useEffect(() => {
    const getEnquiries = async () => {
      const data = await fetchEnquiries();
      if (data) {
        setEnquiry(data);
      }
    };
    getEnquiries();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getLoggedInUser();
      setAdmin(userData);
    };
    fetchData();
  }, []);

  const handleDelete = async (enquiryId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );
    if (!confirmed) return;

    const success = await deleteEnquiry(enquiryId);
    if (success) {
      setEnquiry(enquiries.filter((enquiry) => enquiry.id !== enquiryId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />

      <div className=" flex-1 flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-3xl font-bold  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FeedBack Details
            </h2>
            <div className="flex items-center space-x-6">
              <div
                onClick={() => navigate("/admin-accounts")}
                className="flex items-center space-x-3 bg-gray-50 py-2 px-4 rounded-full hover:cursor-pointer"
              >
                <img
                  src={admin?.profile_image_url}
                  alt={admin?.username || "User"}
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                />
                <span className="font-medium text-gray-700">
                  {admin?.username || "User"}
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 flex-1 overflow-auto">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search users by name..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className=" bg-white h-[450px] rounded-2xl shadow-lg overflow-y-auto border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">FeedBack List</h3>
              <p className="text-sm text-gray-500 mt-1">
                Manage and monitor user Feedback
              </p>
            </div>
            <div className="  overflow-x-auto">
              <table className=" min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    {["User", "Email", "Contact", "Message", "Actions"].map(
                      (header) => (
                        <th
                          key={header}
                          className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider bg-gradient-to-b from-gray-50 to-gray-100"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {enquiries
                    .filter((enquiry) =>
                      enquiry.name
                        .toLowerCase()
                        .includes(searchFilter.toLowerCase())
                    )
                    .map((enquiry, index) => (
                      <tr
                        key={index}
                        className="hover:bg-blue-50/50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {enquiry?.user_image_url ? (
                              <img
                                src={enquiry.user_image_url}
                                alt={enquiry?.full_name || "User"}
                                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                              />
                            ) : (
                              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-lg font-medium shadow-sm">
                                {enquiry?.name
                                  ?.split(" ")
                                  .map((word) => word.charAt(0).toUpperCase())
                                  .slice(0, 2)
                                  .join("") || "U"}
                              </div>
                            )}
                            <div className="ml-4">
                              <div className="text-sm font-semibold text-gray-900">
                                {enquiry.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                User ID: {enquiry.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-600 group">
                            <div className="p-1.5 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 mr-2">
                              <Mail size={14} className="text-blue-500" />
                            </div>
                            {enquiry.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-600 group">
                            <div className="p-1.5 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors duration-200 mr-2">
                              <Phone size={14} className="text-green-500" />
                            </div>
                            {enquiry.contact}
                          </div>
                        </td>
                        <td className="w-[400px] px-6 py-4">
                          <div className="overflow-x-auto max-w-[400px] no-scrollbar">
                            <div className="w-[800px]">
                              <h1>{enquiry.message}</h1>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(enquiry.id)}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition-all duration-200 shadow-sm hover:shadow"
                          >
                            <Trash2 size={16} className="mr-2" />
                            Delete
                          </button>
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

export default ContactUsdetails;
