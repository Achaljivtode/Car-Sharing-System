import React, { useState } from "react";
import { LuLayoutDashboard, LuUsersRound, LuNotebook } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineAccountCircle, MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Car, History, Settings, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(location.pathname);

  const role = localStorage.getItem("role") || "customer";
  console.log(isSidebarOpen);


  const menuItems = [
    {
      redirect: "/admin-dashboard",
      icon: LuLayoutDashboard,
      label: "Dashboard",
    },
    { redirect: "/users", icon: LuUsersRound, label: "Users" },
    { redirect: "/admin-booking", icon: LuNotebook, label: "Bookings" },
    { redirect: "/cars", icon: TbReportSearch, label: "Cars Reports" },
    {
      redirect: "/admin-accounts",
      icon: MdOutlineAccountCircle,
      label: "Accounts",
    },
  ];

  const customerItems = [
    { redirect: "/cars", icon: Car, label: "Available Car" },
    { redirect: "/customer-booking", icon: History, label: "My Booking" },
    { redirect: "/customer-history", icon: History, label: "History" },
    { redirect: "/customer-profile", icon: Settings, label: "Profile" },
  ];

  const handleNavigation = (path) => {
    setActiveItem(path);
    navigate(path, { state: { activeItem: path } });
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/home");
  };
  return (
    <div
      className={`${isSidebarOpen ? "w-80" : "w-25"
        } bg-white shadow-xl h-screen transition-all duration-300 flex flex-col relative group`}
    >
      <div className=" p-6 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Car className="text-white w-5 h-5" />
          </div>
          {
            isSidebarOpen &&
            <h1
              className={` font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transition-opacity duration-300 ${!isSidebarOpen ? "opacity-0" : "opacity-100"
                }`}
            >
              CarShare {role === "admin" ? "Admin" : ""}
            </h1>
          }
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2  hover:bg-gray-50 rounded-lg transition-colors duration-200"
        >
          {isSidebarOpen ? (
            <RxCross2 className="w-6 h-6 text-gray-500" />
          ) : (
            <MdOutlineMenu className="w-6 h-6 text-gray-500" />
          )}
        </button>
      </div>

      <nav className="flex-1 mt-6 px-4">
        <ul className="space-y-2">
          {(role === "admin" ? menuItems : customerItems).map((item) => (
            <li key={item.redirect}>
              <button
                onClick={() => handleNavigation(item.redirect)}
                className={`flex items-center gap-3 w-full p-4 rounded-xl transition-all duration-200 group relative ${activeItem === item.redirect
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "hover:bg-gray-50 text-gray-700 hover:text-blue-600"
                  }`}
              >
                <item.icon
                  className={`w-5 h-5 transition-transform duration-200 ${!isSidebarOpen && "transform group-hover:scale-110 "
                    }`}
                />
                {isSidebarOpen && (
                  <span
                    className={`font-medium transition-opacity duration-300 ${!isSidebarOpen ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    {item.label}
                  </span>
                )}


              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors duration-200 group"
        >
          <LogOut className="w-5 h-5" />
          {isSidebarOpen && (
            <span className="font-medium">
              Logout
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
