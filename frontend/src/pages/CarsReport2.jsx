import React, { useEffect, useState } from "react";
import { fetchCars, fetchFeatures, getLoggedInUser, deleteCar } from "../api";
import {
  Car,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Fuel,
  Battery,
  Tag,
  Circle,
} from "lucide-react";
import SideBar from "../Components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";

function CarsReports2() {
  const role = localStorage.getItem("role");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [cars, setCars] = useState([]);
  // const [carDetail, setCarDetail] = useState([]);
  const [user, setUser] = useState(null);
  const [features, setFeatures] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchCars();
      if (data) {
        setCars(data);
      }
      const userData = await getLoggedInUser();
      setUser(userData);
    };
    getCars();
  }, []);

  useEffect(() => {
    const loadFeatures = async () => {
      const fetchedFeatures = await fetchFeatures();
      setFeatures(fetchedFeatures);
    };
    loadFeatures();
  }, []);

  const handleBookNow = (carId) => {
    navigate(`/book-now/${carId}`);
  };

  const handleDelete = async (carId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );
    if (!confirmDelete) return;

    const success = await deleteCar(carId);
    if (success) {
      alert("Car deleted successfully!");
      setCars(cars.filter((car) => car.id !== carId));
    } else {
      alert("Failed to delete the car. Please try again.");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "text-green-500";
      case "in_use":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "electric":
        return <Battery className="w-4 h-4" />;
      case "petrol":
      case "diesel":
        return <Fuel className="w-4 h-4" />;
      default:
        return <Car className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />

      <div className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available Cars
              </h2>
              <div className="flex items-center space-x-4">
                {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Bell size={20} />
                </button> */}
                <div onClick={()=> navigate('/admin-accounts')} className=" flex items-center space-x-3 hover:cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={
                        user?.profile_image_url ||
                        "https://via.placeholder.com/32"
                      }
                      alt={user?.username || "User"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-gray-700">
                    {user?.username || "User"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl  h-[620px] overflow-y-auto mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search cars..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Cars</option>
                  <option value="available">Available</option>
                  <option value="in_use">In Use</option>
                </select>
                <Filter
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              {role == "admin" && (
                <button
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => navigate("/add-cars")}
                >
                  Add Car
                </button>
              )}
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cars
              .filter(
                (car) =>
                  (selectedFilter === "all" || car.status === selectedFilter) &&
                  (searchFilter === "" ||
                    car.car_model
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase()))
              )
              .map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300  m-2"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 ">
                    <img
                      src={car.car_image_url}
                      alt={car.car_model}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {role === "admin" && (
                      <div className="absolute top-4 right-4">
                        <div
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm ${getStatusColor(
                            car.status
                          )}`}
                        >
                          <Circle size={8} />
                          <span className="text-sm font-medium capitalize">
                            {car.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {car.car_model}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        {getTypeIcon(car.fuel_type)}
                        <span className="ml-2 capitalize">{car.fuel_type}</span>
                      </div>

                      <div className="flex items-center text-sm">
                        <Tag size={16} className="mr-2 text-gray-500" />
                        <span className="font-semibold text-blue-600 text-base">
                          ${car.price_per_hour}
                        </span>
                        <span className="text-gray-500 ml-1">/hour</span>
                      </div>

                      <div className="pt-3 border-t">
                        <div className="flex flex-wrap gap-2">
                          {car.features?.map((feature) => (
                            <span
                              key={feature.id}
                              className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100"
                            >
                              {feature.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      {role !== "admin" ? (
                        <button
                          disabled={car.status !== "available"}
                          onClick={() => handleBookNow(car.id)}
                          className={`w-full px-4 py-2.5 rounded-lg font-medium transition-colors ${
                            car.status === "available"
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {car.status === "available"
                            ? "Book Now"
                            : "Unavailable"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDelete(car.id)}
                          className="w-full px-4 py-2.5 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CarsReports2;
