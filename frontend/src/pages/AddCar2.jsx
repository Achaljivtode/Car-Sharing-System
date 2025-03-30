import React, { useState, useEffect } from "react";
import { addCar, fetchFeatures, getLoggedInUser } from "../api";
import { useNavigate } from "react-router-dom";

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
  ChevronLeft,
} from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
// import { useNavigate } from "react-router-dom";

function AddCar2() {
  const [carData, setCarData] = useState({
    car_owner: "",
    car_model: "",
    car_number: "",
    fuel_type: "",
    price_per_hour: "",
    status: "",
    car_image: null,
    feature_ids: [],
    user: null,
  });

  const [features, setFeatures] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  console.log(features);

  // Logged In user
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getLoggedInUser();
      console.log("Logged-in User Data:", userData);
      setUser(userData);
      setCarData((prev) => ({ ...prev, user: userData.id }));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const loadFeatures = async () => {
      const fetchedFeatures = await fetchFeatures();
      setFeatures(fetchedFeatures);
    };
    loadFeatures();
  }, []);

  // const featuresList = [
  //   "Autopilot",
  //   "Sunroof",
  //   "Bluetooth",
  //   "Backup Camera",
  //   "Heated Seats",
  //   "Navigation System",
  //   "Cruise Control",
  //   'Premium Sound',
  //   'Park Assist',
  //   'Air Suspension'
  // ];

  const handleFeatureChange = (event) => {
    const featureId = parseInt(event.target.value);
    setCarData((prevData) => ({
      ...prevData,
      feature_ids: event.target.checked
        ? [...prevData.feature_ids, featureId]
        : prevData.feature_ids.filter((id) => id !== featureId),
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (event) => {
    setCarData({ ...carData, car_image: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await addCar(carData);
    if (response) {
      alert("Car added successfully!");

      navigate("/cars");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="bg-gray-100 flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <a
                href="/cars"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft size={20} />
                <span>Back to Cars Reports</span>
              </a>
              <h2 className="text-2xl font-semibold text-gray-800">
                Add New Vehicle
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src={
                    user?.profile_image_url || "https://via.placeholder.com/150"
                  }
                  alt={user?.username || "User"}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{user?.username || "User"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Add Car Form */}
        <main className=" p-6 ">
          <div className=" h-[650px] overflow-y-auto max-w-4xl  mx-auto  no-scrollbar">
            <form
              onSubmit={handleSubmit}
              className="bg-white  shadow-md rounded-lg p-10 space-y-6"
            >
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-xl mb-10 font-semibold text-gray-900">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Vehicle Name
                    </label>
                    <input
                      type="text"
                      name="car_model"
                      value={carData.car_model}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., Tesla Model 3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Vehicle Number
                    </label>
                    <input
                      type="text"
                      name="car_number"
                      value={carData.car_number}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Vehicle Number eg.MH12AB2332"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Owner Name
                    </label>
                    <input
                      type="text"
                      name="car_owner"
                      value={carData.car_owner}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Owner Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Vehicle Type
                    </label>
                    <select
                      name="fuel_type"
                      value={carData.fuel_type}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select type</option>
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Vehicle Image */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Vehicle Image
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      Drag and drop an image here, or click to select
                    </p>
                    <label
                      htmlFor="carImageInput"
                      className="mt-2 text-sm text-blue-600 hover:text-blue-500 cursor-pointer"
                    >
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="carImageInput"
                      onChange={handleImageChange}
                      className="hidden"
                      accept="image/*"
                    />

                    {/* Show Image Preview if Selected */}
                    {carData.car_image && (
                      <img
                        src={URL.createObjectURL(carData.car_image)}
                        alt="Preview"
                        className="mt-4 w-32 h-32 rounded-lg object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Hourly Rate ($)
                    </label>
                    <input
                      type="number"
                      name="price_per_hour"
                      value={carData.price_per_hour}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., 45"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      name="status"
                      value={carData.status}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select type</option>
                      <option value="available">Available</option>
                      <option value="in_use">In Use</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Features
                </h3>
                <div className="grid grid-cols-2 space-y-2">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className=" flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={feature.id}
                        checked={carData.feature_ids.includes(feature.id)}
                        onChange={handleFeatureChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label className="text-gray-700">{feature.name}</label>
                    </div>
                  ))}
                </div>
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
