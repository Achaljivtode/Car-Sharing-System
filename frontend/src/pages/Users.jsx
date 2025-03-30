import React, { useState, useEffect } from "react";
import { fetchCustomers, deleteCustomer, getLoggedInUser } from "../api";

import {
  Car,
  Users,
  Calendar,
  Settings,
  CreditCard,
  Menu,
  X,
  ChevronUp,
  MapPin,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Shield,
} from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";

function User() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(null);
  console.log(users);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchCustomers();
      if (data) {
        setUsers(data);
      }
    };
    getCustomers();
  }, []);

  // Logged In user
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getLoggedInUser();
      setAdmin(userData);
    };
    fetchData();
  }, []);

  const handleDelete = async (customerId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user"
    );
    if (!confirmed) return;

    const success = await deleteCustomer(customerId);
    if (success) {
      setUsers(users.filter((user) => user.id !== customerId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src={admin?.profile_image_url}
                  alt={admin?.username || "User"}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{admin?.username || "User"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Users Content */}
        <main className="p-6">
          {/* Search and Filters */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search users..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Users</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
                <Filter
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add User
              </button> */}
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DOB
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users
                  .filter((user) =>
                    user.full_name
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase())
                  )
                  .map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {user?.user_image_url ? (
                            <img
                              src={user.user_image_url}
                              alt={user?.full_name || "User"}
                              className="h-8 w-8 rounded-full object-cover "
                            />
                          ) : (
                            <span className="text-black text-xl font-medium h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400  text-center">
                              {user?.full_name
                                ?.split(" ") // Split name into words
                                .map((word) => word.charAt(0).toUpperCase()) // Get first letter of each word
                                .slice(0, 2) // Only take first two initials
                                .join("") || "U"}{" "}
                              {/* Default to 'U' if name is missing */}
                            </span>
                          )}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.full_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.phone_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.dob}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-red-500 text-white p-2 rounded-md hover:cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default User;
