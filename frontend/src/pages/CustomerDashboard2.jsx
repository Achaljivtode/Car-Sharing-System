import React, { useState } from "react";
import {
  Car,
  Clock,
  MapPin,
  Calendar,
  CreditCard,
  History,
  Settings,
  LogOut,
  Search,
  Filter,
} from "lucide-react";

function CustomerDashboard2() {
  const [activeTab, setActiveTab] = useState("available");

  const cars = [
    {
      id: 1,
      name: "Tesla Model 3",
      location: "Downtown Station",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=2000",
      available: true,
      range: "320 miles",
      type: "Electric",
    },
    {
      id: 2,
      name: "BMW i4",
      location: "Central Park",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000",
      available: true,
      range: "300 miles",
      type: "Electric",
    },
    {
      id: 3,
      name: "Audi e-tron",
      location: "Airport Terminal",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000",
      available: false,
      range: "280 miles",
      type: "Electric",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Car className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold">CarShare</h1>
          </div>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
              <Car className="w-5 h-5" />
              <span>Available Cars</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5" />
              <span>Active Rentals</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <History className="w-5 h-5" />
              <span>History</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <CreditCard className="w-5 h-5" />
              <span>Payments</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Available Cars
              </h2>
              <p className="text-gray-600">Find and book your next ride</p>
            </div>

            <div className="flex gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cars..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  {!car.available && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Currently Rented
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>

                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{car.location}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {car.type}
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                      {car.range}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">${car.price}</span>
                      <span className="text-gray-600">/hour</span>
                    </div>

                    <button
                      disabled={!car.available}
                      className={`px-4 py-2 rounded-lg ${
                        car.available
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {car.available ? "Book Now" : "Unavailable"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard2;
