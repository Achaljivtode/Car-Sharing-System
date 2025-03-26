import React, { useState } from "react";
import { LuLayoutDashboard, LuUsersRound, LuNotebook } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
// import { CiCreditCard2 } from "react-icons/ci";
import { MdOutlineAccountCircle, MdOutlineMenu } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(null); // Initially, no item is active


  const menuItems = [
    { redirect: "/helo", icon: LuLayoutDashboard, label: "Dashboard" },
    { redirect: "/users", icon: LuUsersRound, label: "Users" },
    { redirect: "/admin-booking", icon: LuNotebook, label: "Bookings" },
    { redirect: "/cars", icon: TbReportSearch, label: "Cars Reports" },
    // { redirect: "/add-cars", icon: CiCreditCard2, label: "Add Cars" },
    { redirect: "", icon: MdOutlineAccountCircle, label: "Accounts" },
    { redirect: "", icon: HiOutlineLogout, label: "Logout" },
  ];
  const role = localStorage.getItem('role')

  return (
    <div className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className={`font-bold text-xl text-blue-600 ${!isSidebarOpen && "hidden"}`}>CarShare Admin</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
          {isSidebarOpen ? <RxCross2 size={20} /> : <MdOutlineMenu size={20} />}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label} onClick={() => setActiveItem(item.label)}>
              <a
                href={item.redirect}
                className={`flex items-center space-x-3 p-3 rounded-lg ${
                  activeItem === item.label ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                }`}
              >
                <item.icon size={20} />
                {isSidebarOpen && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
