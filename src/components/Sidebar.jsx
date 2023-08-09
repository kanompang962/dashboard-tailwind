import React from "react";
import { sidebarItems } from "../content/content";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="hidden md:block pt-8 pl-8">
      {/* Logo */}
      <div className="flex justify-center items-center mb-6 text-3xl font-semibold">
        <span className="text-danger">A</span>dmin
      </div>
      {/* List Items */}
      <div className="relative bg-white shadow-3xl h-[85vh] rounded-xl">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer px-6 ${
              item.title === "Analytics" ? "bg-light " : ""
            }`}
          >
            <div
              className={`flex flex-row items-center justify-start p-4 gap-x-4 hover:-translate-x-2 duration-300 ${
                item.id === 4 ? "-translate-x-2 " : ""
              }`}
            >
              <item.icon className="text-[18px] text-darkVariant" />
              <h3 className="text-[12px] text-darkVariant">{item.title}</h3>
            </div>
          </div>
        ))}
        {/* Logout */}
        <div className="absolute w-full bottom-8 px-6 cursor-pointer hover:-translate-x-2 duration-300">
          <div className="flex flex-row items-center justify-start p-4 gap-x-4">
            <MdOutlineLogout className="text-[18px] text-darkVariant" />
            <h3 className="text-[12px] text-darkVariant">Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
