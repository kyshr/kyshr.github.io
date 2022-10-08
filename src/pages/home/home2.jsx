import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { BsCalendar2Event, BsUiChecks } from "react-icons/bs";
import { BiGroup, BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/icpepse-logo.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Events", link: "/view/events", icon: BsCalendar2Event },
    { name: "Attendance", link: "/view/attendance", icon: BsUiChecks },
    {
      name: "Create Event",
      link: "/event/create",
      icon: IoIosCreate,
    },
    { name: "Sections", link: "/sections", icon: BiGroup, margin: true },
    { name: "Logout", link: "/logout", icon: BiLogOut },
  ];

  const currLocation = useLocation().pathname;
  return (
    <div
      className={`bg-matisse h-screen drop-shadow-lg ${
        sidebarOpen ? "w-60" : "w-16"
      } duration-500 text-white ${sidebarOpen ? "px-4" : "px-1"} `}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={35}
          className="cursor-pointer "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      <div className="flex justify-center m-2">
        <img className="w-[100px]" alt="icpep-logo" src={Logo} />
      </div>

      <div className="mt-8 flex flex-col gap-4 relative text-gray-300">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm hover:bg-white hover:text-matisse gap-3.5 font-medium py-2 ${
              sidebarOpen ? "px-2" : "px-4"
            } hover:bg-gray-800 rounded-md ${
              currLocation === menu?.link ? "bg-white text-matisse" : ""
            }`}
          >
            <div>{React.createElement(menu?.icon, { size: "25" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !sidebarOpen && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
        {/* <p>{currLocation}</p> */}
      </div>
    </div>
  );
};

export default Sidebar;
