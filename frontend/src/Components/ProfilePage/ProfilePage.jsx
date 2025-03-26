import React, { useState } from 'react';
import {
  LogOut,
  MapPin,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react';
import SideBar from '../SideBar/SideBar';

export default function ProfilePage() {
    const [number, setNumber] = useState('123457890');
    const [email, setEmail] = useState('john.doe@example.com');
    const [dob, setDob] = useState('January 15, 1990');

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
                                    <span className="text-white text-3xl font-medium">JD</span>
                                </div>
                            </div>
                            <div className="ml-6">
                                <div className="flex items-center space-x-4">
                                    <h2 className="text-2xl font-bold">John Doe</h2>
                                </div>
                                <div className="mt-2 flex items-center text-gray-500">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-gray-500">Total Rides</div>
                            <div className="mt-2 text-2xl font-bold">34</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-gray-500">Member Since</div>
                            <div className="mt-2 text-2xl font-bold">2020</div>
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
                                        className="text-gray-500 p-1 outline-none rounded"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
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
                                        className="text-gray-500 p-1 outline-none rounded"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        className="text-gray-500 p-1 outline-none rounded"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        placeholder="Enter Your DOB"
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-blue-500 text-white my-5 p-2 rounded-md hover:cursor-pointer hover:bg-blue-600">
                            Save
                        </button>
                    </div>

                    {/* Account Settings */}
                    <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
                        <button
                            onClick={() => localStorage.removeItem('role')}
                            className="w-full flex items-center justify-center px-4 py-3 mt-6 text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
                        >
                            <LogOut className="h-5 w-5 mr-2" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
