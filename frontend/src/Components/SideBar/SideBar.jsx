import React, { useState, useEffect } from "react";
import { LuLayoutDashboard, LuUsersRound, LuNotebook } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineAccountCircle, MdOutlineMenu } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Car, History, Settings, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route path
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(location.pathname); // Set active item based on URL

  const role = localStorage.getItem("role") || "customer";

  const menuItems = [
    { redirect: "/admin-dashboard", icon: LuLayoutDashboard, label: "Dashboard" },
    { redirect: "/users", icon: LuUsersRound, label: "Users" },
    { redirect: "/admin-booking", icon: LuNotebook, label: "Bookings" },
    { redirect: "/cars-reports", icon: TbReportSearch, label: "Cars Reports" },
    { redirect: "/admin-accounts", icon: MdOutlineAccountCircle, label: "Accounts" },
  ];

  const customerItems = [
    { redirect: "/customer-dashboard", icon: Car, label: "Available Car" },
    { redirect: "/customer-booking", icon: History, label: "My Booking" },
    { redirect: "/customer-history", icon: History, label: "History" },
    { redirect: "/customer-profile", icon: Settings, label: "Profile" },
  ];

  const handleNavigation = (path) => {
    setActiveItem(path); // Set active item based on route path
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login"); // Redirect after logout
  };

  return (
    <div className={`${isSidebarOpen ? "w-80" : "w-20"} bg-white shadow-lg h-screen transition-all duration-300 flex flex-col`}>
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className={`font-bold text-xl text-blue-600 ${!isSidebarOpen && "hidden"}`}>CarShare {role === "admin" ? "Admin" : ""}</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
          {isSidebarOpen ? <RxCross2 size={20} /> : <MdOutlineMenu size={20} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 mt-5 p-4">
        <ul className="space-y-2">
          {(role === "admin" ? menuItems : customerItems).map((item) => (
            <li key={item.redirect}>
              <button
                onClick={() => handleNavigation(item.redirect)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${
                  activeItem === item.redirect ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                }`}
              >
                <item.icon size={20} />
                {isSidebarOpen && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button onClick={handleLogout} className="flex items-center gap-3 w-full p-3 text-red-600 hover:bg-red-50 rounded-lg">
          <LogOut size={20} />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
