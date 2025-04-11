import React, { useState, useEffect } from "react";
import { getLoggedInUser, updateUserProfile, getBookings } from "../../api";
import {
  LogOut,
  MapPin,
  Phone,
  Mail,
  Calendar,
  User,
  Camera,
  Clock,
  Car,
} from "lucide-react";
import SideBar from "../SideBar/SideBar";
// import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  // const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    phone_number: "",
    email: "",
    dob: "",
    address: "",
    password: "",
    profile_image_url: "",
  });

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getLoggedInUser();
        if (data) {
          setUser(data);
          setFormData({
            profile_image_url: data.profile_image_url,
            username: data.username || "",
            full_name: data.full_name || "",
            phone_number: data.phone_number || "",
            email: data.email || "",
            dob: data.dob || "",
            address: data.address || "",
            password: data.password || "",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const myBookings = async () => {
      const data = await getBookings();
      if (data) {
        setBookings(data);
      }
    };
    myBookings();
  }, []);

  const userBookings = bookings.filter((rental) => user.id === rental.user);
  const bookingCount = userBookings.length;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!user.id) {
      alert("User ID is missing. Try logging in again.");
      return;
    }
    // try {
    //   const updatedUser = await updateUserProfile(user.id, formData);
    //   if (updatedUser) {
    //     setUser(updatedUser);

    //     alert("Profile updated successfully");
    //   }
    // } catch (error) {
    //   console.error("Error updating profile:", error);
    //   alert("Failed to update profile");
    // }

    try {
      await updateUserProfile(user.id, formData); // Just send update
      const updatedUser = await getLoggedInUser(); // Then fetch fresh user
      console.log("Updated user data:", updatedUser);
      setUser(updatedUser); // Profile image + date formatting works
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="overflow-y-auto max-h-screen p-6">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90"></div>
            <div className="relative flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 pt-20">
              <div className="relative group">
                <div className="h-32 w-32 rounded-full ring-4 ring-white bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center overflow-hidden">
                  {user?.profile_image_url ? (
                    <img
                      src={user.profile_image_url}
                      alt={user?.full_name || "User"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-4xl font-medium">
                      {user?.full_name
                        ?.split(" ")
                        .map((word) => word.charAt(0).toUpperCase())
                        .slice(0, 2)
                        .join("") || "U"}
                    </span>
                  )}
                </div>
              </div>
              <div className="md:ml-8 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800">
                  {user.full_name || "User"}
                </h2>
                <div className="mt-2 flex items-center justify-center md:justify-start text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{user.address || "Location not available"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500 font-medium">
                    Total Rides
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {bookingCount || 0}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500 font-medium">
                    Member Since
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {user.date_joined || "N/A"}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500 font-medium">
                    Profile Status
                  </div>
                  <div className="text-2xl font-bold text-gray-800">Active</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    Address
                  </label>
                  <textarea
                    name="address"
                    rows="3"
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <a
                href="/change-password"
                className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
              >
                <User className="h-4 w-4 mr-2" />
                Change Password
              </a>
              <button
                onClick={handleUpdate}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 transition-all font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
