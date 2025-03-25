import React, { useState } from 'react';
import {
  Car,
  Users,
  Calendar,
  Settings,
  CreditCard,
  Menu,
  X,
  Bell,
  Upload,
  Battery,
  Fuel,
  MapPin,
  Plus,
  ChevronLeft
} from 'lucide-react';
import SideBar from '../Components/SideBar/SideBar';
import { useNavigate } from 'react-router-dom';

function AddCar2() {


  const [selectedFeatures, setSelectedFeatures] = useState([]);
  

  const featuresList = [
    "Autopilot",
    "Sunroof",
    "Bluetooth",
    "Backup Camera",
    "Heated Seats",
    "Navigation System",
    "Cruise Control",
    'Premium Sound',
    'Park Assist',
    'Air Suspension'
  ];

  const handleFeatureChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFeatures((prevFeatures) =>
      checked ? [...prevFeatures, name] : prevFeatures.filter((feature) => feature !== name)
    );
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
            <div className="flex items-center space-x-4">
              <a href="/cars" className="flex items-center text-gray-600 hover:text-gray-900">
                <ChevronLeft size={20} />
                <span>Back to Cars Reports</span>
              </a>
              <h2 className="text-2xl font-semibold text-gray-800">Add New Vehicle</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Add Car Form */}
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Vehicle Name</label>
                    <input
                      type="text"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., Tesla Model 3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Vehicle Number</label>
                    <input
                      type="text"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Vehicle Number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                    <input
                      type="text"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Owner Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                    <select className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option value="">Select type</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Petrol</option>
                      <option value="gas">Diesel</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Vehicle Image */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Vehicle Image</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Drag and drop an image here, or click to select</p>
                    <input type="file" className="hidden" accept="image/*" />
                    <button type="button" className="mt-2 text-sm text-blue-600 hover:text-blue-500">
                      Upload Image
                    </button>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Hourly Rate ($)</label>
                    <input
                      type="number"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., 45"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option value="">Select type</option>
                      <option value="electric">Available</option>
                      <option value="hybrid">In Use</option>
                    </select>
                  </div>
                </div>
              </div>


              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                <div className="grid grid-cols-2 space-y-2">
                  {featuresList.map((feature) => (
                    <div key={feature} className=" flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name={feature}
                        id={feature}
                        checked={selectedFeatures.includes(feature)}
                        onChange={handleFeatureChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={feature} className="text-gray-700">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Selected Features: {selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "None"}
                </p>
              </div>


              {/* Submit Buttons */}
              <div className="flex justify-end space-x-4 pt-4 border-t">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddCar2;