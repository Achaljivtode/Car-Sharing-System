import React, { useEffect, useState } from "react";
import { fetchCars, fetchFeatures, getLoggedInUser } from "../api";
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
  const role = localStorage.getItem('role')
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [cars, setCars] = useState([]);
  const [user, setUser] = useState(null);
  const [features, setFeatures] = useState([]);
  console.log(features);

  const navigate = useNavigate();

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchCars();
      if (data) {
        setCars(data);
      }
    };
    getCars();
  }, []);

  // Logged In user
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getLoggedInUser();
      setUser(userData);
    };
    fetchData();
  }, []);

  // Fetch Features
  useEffect(() => {
    const loadFeatures = async () => {
      const fetchedFeatures = await fetchFeatures();
      setFeatures(fetchedFeatures);
    };
    loadFeatures();
  }, []);

  //  Function to Map Feature IDs to Names
  //

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
        return <Fuel className="w-4 h-4" />;
      case "diesel":
        return <Fuel className="w-4 h-4" />;
      default:
        return <Car className="w-4 h-4" />;
    }
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
            <h2 className="text-2xl font-semibold text-gray-800">
              Available Cars
            </h2>
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

        {/* Cars Content */}
        <main className="p-6">
          {/* Search and Filters */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search cars..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Cars</option>
                  <option value="available">Available</option>
                  <option value="in-use">In Use</option>
                  {/* <option value="maintenance">Maintenance</option> */}
                </select>
                <Filter
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              {
                role !== 'admin' ? (
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => navigate("/book-now")}
                  >
                    Book Now
                  </button>
                ):
                (
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => navigate("/add-cars")}
                  >
                    Add New Car
                  </button>
                )
              }
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative p-2 mb-5 h-48">
                  <img
                    src={car.car_image_url}
                    alt={car.car_model}
                    className="w-full"
                  />
                  {
                    role === 'admin' && (
                      <div className="absolute top-4 right-4">
                        <div
                          className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-white/90 ${getStatusColor(
                            car.status
                          )}`}
                        >
                          <Circle size={8} />
                          <span className="text-sm font-medium">{car.status}</span>
                        </div>
                      </div>
                    )
                  }
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {car.car_model}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      {getTypeIcon(car.fuel_type)}
                      <span className="ml-1">{car.fuel_type}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Tag size={14} className="mr-1 text-gray-500" />
                      <span className="font-semibold text-blue-600">
                        ${car.price_per_hour}
                      </span>
                      <span className="text-gray-500">/hour</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex flex-wrap gap-2">
                        {car.features?.map((feature) => (
                          <p
                            key={feature.id}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {feature.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  {
                    role !== "admin" && (
                      <div >
                        <button
                          disabled={car.status !== "available"}
                          className={`px-4 py-2 w-full rounded-lg hover:cursor-pointer ${car.status === "available"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                          onClick={() => navigate('/book-now')}
                        >
                          {car.status === "available" ? "Book Now" : "Unavailable"}
                        </button>
                      </div>
                    )
                  }


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
