import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, Calendar as CalendarIcon } from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";

function CustomerHistory() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([
    {
      id: 1,
      name: "Tesla Model 3",
      fromLocation: "Downtown Station",
      toLocation: "Downtown Station",
      startTime: "2024-03-01T10:00:00",
      endTime: "2024-03-01T14:00:00",
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=2000",
      totalCost: 100,
    },
    {
      id: 2,
      name: "BMW i4",
      fromLocation: "Central Park",
      toLocation: "Central Park",
      startTime: "2024-02-28T09:00:00",
      endTime: "2024-02-28T17:00:00",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000",
      totalCost: 240,
    },
    {
      id: 3,
      name: "Audi e-tron",
      fromLocation: "Airport Terminal",
      toLocation: "Airport Terminal",
      startTime: "2024-02-25T12:00:00",
      endTime: "2024-02-25T18:00:00",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000",
      totalCost: 180,
    },
  ]);

  const formatTime = (dateString) => new Date(dateString).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Fixed) */}
      <SideBar />

      {/* Main Content (Scrollable) */}
      <div className="flex flex-col w-full h-screen">
        {/* Header (Non-Scrolling) */}
        <div className="p-6 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">My Booking</h2>
          <p className="text-gray-600">View your past booking</p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {history.length > 0 ? (
            history.map((rental) => (
              <div key={rental.id} className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="flex">
                  <div className="w-1/4">
                    <img src={rental.image} alt={rental.name} className="h-[250px] w-full object-cover" />
                  </div>
                  <div className="w-3/4 p-6">
                    <h3 className="text-xl font-semibold mb-2">{rental.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 m-1" />
                      <span>{rental.fromLocation}</span>
                      <span className="ml-5">→ {rental.toLocation}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-6 my-4">
                      <div className="flex flex-col text-lg text-gray-500">Date: <span className="text-gray-700  font-semibold text-xl">{formatDate(rental.startTime)}</span></div>
                      <div className="flex flex-col text-lg text-gray-500">Time: <span className="text-gray-700  font-semibold text-xl">{formatTime(rental.startTime)} - {formatTime(rental.endTime)}</span></div>
                      <div className="flex flex-col text-lg text-gray-500">Cost: <span className="text-gray-900  font-semibold  text-xl">${rental.totalCost}</span></div>
                    </div>
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">Cancel Booking</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No booking history found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerHistory;
