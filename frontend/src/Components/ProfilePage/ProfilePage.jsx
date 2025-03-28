import React, { useState, useEffect } from "react";

import { getLoggedInUser, updateUserProfile } from "../../api";
import { LogOut, MapPin, Phone, Mail, Calendar, User } from "lucide-react";
import SideBar from "../SideBar/SideBar";

import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    phone_number: "",
    email: "",
    dob: "",
    address: "",
    password: "",
    profile_image_url: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getLoggedInUser();
        if (data) {
          setUser(data);
          setFormData({
            profile_image_url: data.profile_image_url ,
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!user.id) {
      alert("User ID is missing. Try logging in again.");
      return;
    }
    try {
      const updatedUser = await updateUserProfile(user.id, formData);
      if (updatedUser) {
        setUser(updatedUser); // Update UI with new user data
        alert("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };
  //   if (!user || Object.keys(user).length === 0) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="overflow-y-auto max-h-screen p-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                  {user?.profile_image_url ? (
                    <img
                      src={user.profile_image_url}
                      alt={user?.full_name || "User"}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-4xl font-medium">
                      {user?.full_name
                        ?.split(" ") // Split name into words
                        .map((word) => word.charAt(0).toUpperCase()) // Get first letter of each word
                        .slice(0, 2) // Only take first two initials
                        .join("") || "U"}{" "}
                      {/* Default to 'U' if name is missing */}
                    </span>
                  )}
                </div>
              </div>
              <div className="ml-6">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold">
                    {user.full_name || "User"}
                  </h2>
                </div>
                <div className="mt-2 flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{user.address || "Location not available"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-gray-500">Total Rides</div>
              <div className="mt-2 text-2xl font-bold">
                {user.totalRides || 0}
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-gray-500">Member Since</div>
              <div className="mt-2 text-2xl font-bold">
                {user.memberSince || "N/A"}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <div className="font-medium">Phone Number</div>
                  <input
                    type="number"
                    name="phone_number"
                    className="text-gray-500 p-1 outline-none rounded"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <div className="font-medium">Email</div>
                  <input
                    type="email"
                    name="email"
                    className="text-gray-500 p-1 outline-none rounded"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <div className="font-medium">Date of Birth</div>
                  <input
                    type="text"
                    name="dob"
                    className="text-gray-500 p-1 outline-none rounded"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="Enter Your DOB"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <div className="font-medium">address</div>
                  <textarea
                    // type="text"
                    name="address"
                    className="text-gray-500  outline-none rounded w-[600px]  resize"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Your address"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              onClick={handleUpdate}
              className="w-full bg-blue-500 text-white my-5 p-2 rounded-md hover:cursor-pointer hover:bg-blue-600"
            >
              Save
            </button>
          </div>

          {/* Account Settings */}
          {/* <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
            <button
              onClick={() => {
                localStorage.removeItem("role");
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="w-full flex items-center justify-center px-4 py-3 mt-6 text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
