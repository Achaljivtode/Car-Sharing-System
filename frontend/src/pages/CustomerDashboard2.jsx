import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
import { fetchCars } from "../api";

function CustomerDashboard2() {
  const [activeTab, setActiveTab] = useState("available");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchCars();
      if (data) {
        setCars(data);
      }
    };
    getCars();
  }, []);

  // const handleBookNow = (car) => {
  //   navigate("/book-now", { state: { car } });
  // };

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
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={car.car_image_url}
                    alt={car.car_model}
                    className="w-full h-full object-cover"
                  />
                  {!car.status == "available" && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Currently Rented
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {car.car_model}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {car.fuel_type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">
                        ${car.price_per_hour}
                      </span>
                      <span className="text-gray-600">/hour</span>
                    </div>

                    <button
                      // onClick={() => handleBookNow(car)}
                      disabled={!car.status == "available"}
                      className={`px-4 py-2 rounded-lg ${
                        car.status == "available"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {car.status == "available" ? "Book Now" : "Unavailable"}
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
