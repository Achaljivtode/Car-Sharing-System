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
  Battery,
  Timer,
  Navigation,
  Star,
  Calendar as CalendarIcon,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("history");

  const rentalHistory = [
    {
      id: 1,
      name: "Tesla Model 3",
      location: "Downtown Station",
      startTime: "2024-03-01T10:00:00",
      endTime: "2024-03-01T14:00:00",
      image:
        "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=2000",
      totalCost: 100,
      rating: 5,
      review: "Great experience! The car was clean and performed excellently.",
      distance: "120 miles",
    },
    {
      id: 2,
      name: "BMW i4",
      location: "Central Park",
      startTime: "2024-02-28T09:00:00",
      endTime: "2024-02-28T17:00:00",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000",
      totalCost: 240,
      rating: 4,
      review:
        "Very comfortable ride, though charging took a bit longer than expected.",
      distance: "200 miles",
    },
    {
      id: 3,
      name: "Audi e-tron",
      location: "Airport Terminal",
      startTime: "2024-02-25T12:00:00",
      endTime: "2024-02-25T18:00:00",
      image:
        "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000",
      totalCost: 180,
      rating: 5,
      review: "Fantastic car! Perfect for a day trip.",
      distance: "150 miles",
    },
  ];

  const activeRentals = [
    {
      id: 1,
      name: "Tesla Model 3",
      location: "Downtown Station",
      startTime: "2024-03-10T14:30:00",
      endTime: "2024-03-10T17:30:00",
      image:
        "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=2000",
      batteryLevel: 75,
      remainingRange: "240 miles",
      currentLocation: "123 Main St",
    },
    {
      id: 2,
      name: "BMW i4",
      location: "Central Park",
      startTime: "2024-03-10T13:00:00",
      endTime: "2024-03-10T16:00:00",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000",
      batteryLevel: 60,
      remainingRange: "180 miles",
      currentLocation: "456 Park Ave",
    },
  ];

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

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const calculateTimeLeft = (endTime: string) => {
    const end = new Date(endTime);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

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
            <button
              onClick={() => setActiveTab("available")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "available"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Car className="w-5 h-5" />
              <span>Available Cars</span>
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "active"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Clock className="w-5 h-5" />
              <span>Active Rentals</span>
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "history"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
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
          {activeTab === "history" ? (
            <>
              {/* History Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Rental History
                </h2>
                <p className="text-gray-600">
                  View your past rentals and reviews
                </p>
              </div>

              {/* History List */}
              <div className="space-y-6">
                {rentalHistory.map((rental) => (
                  <div
                    key={rental.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="flex">
                      <div className="w-1/4">
                        <img
                          src={rental.image}
                          alt={rental.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="w-3/4 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              {rental.name}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{rental.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              ${rental.totalCost}
                            </div>
                            <div className="text-sm text-gray-500">
                              Total Cost
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-4">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">
                              Date
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{formatDate(rental.startTime)}</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">
                              Duration
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Clock className="w-4 h-4" />
                              <span>
                                {formatTime(rental.startTime)} -{" "}
                                {formatTime(rental.endTime)}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">
                              Distance
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Navigation className="w-4 h-4" />
                              <span>{rental.distance}</span>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {renderStars(rental.rating)}
                            </div>
                            <span className="text-gray-600">
                              • {rental.rating}/5
                            </span>
                          </div>
                          <p className="text-gray-700">{rental.review}</p>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-600">
                            Book Again
                          </button>
                          <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
                            View Receipt
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : activeTab === "active" ? (
            <>
              {/* Active Rentals Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Active Rentals
                </h2>
                <p className="text-gray-600">
                  Currently rented vehicles and their status
                </p>
              </div>

              {/* Active Rentals Grid */}
              <div className="grid grid-cols-1 gap-6">
                {activeRentals.map((rental) => (
                  <div
                    key={rental.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="flex">
                      <div className="w-1/3">
                        <img
                          src={rental.image}
                          alt={rental.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">
                            {rental.name}
                          </h3>
                          <div className="flex items-center gap-2 text-green-600">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">
                              {calculateTimeLeft(rental.endTime)} remaining
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                          <div>
                            <div className="flex items-center gap-2 text-gray-600 mb-3">
                              <Timer className="w-4 h-4" />
                              <span>
                                {formatTime(rental.startTime)} -{" "}
                                {formatTime(rental.endTime)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{rental.currentLocation}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-gray-600 mb-3">
                              <Battery className="w-4 h-4" />
                              <span>{rental.batteryLevel}% battery</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Navigation className="w-4 h-4" />
                              <span>{rental.remainingRange} range</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Extend Rental
                          </button>
                          <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                            End Early
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Available Cars Header */}
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
                          <span className="text-2xl font-bold">
                            ${car.price}
                          </span>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
