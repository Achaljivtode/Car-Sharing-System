import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";

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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Fixed) */}
      <SideBar />

      {/* Main Content (Scrollable) */}
      <div className="flex flex-col w-full h-screen">
        {/* Header (Non-Scrolling) */}
        <div className="p-6 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">Available Cars</h2>
          <p className="text-gray-600">Find and book your next ride</p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {/* Search and Filter */}
          <div className="flex justify-between items-center mb-6">
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

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  {!car.available && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">Currently Rented</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">{car.type}</span>
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
