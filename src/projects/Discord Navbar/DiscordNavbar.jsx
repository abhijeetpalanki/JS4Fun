import React from "react";

import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaAmazon } from "react-icons/fa";

const DiscordNavbar = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 flex flex-col w-16 h-screen bg-white shadow-lg dark:bg-gray-900">
        <SideBarIcon icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaAmazon size="20" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
      </div>

      <div className="flex items-center justify-center w-screen h-screen">
        <h1 className="text-5xl font-bold font-['Muli']">Discord Navbar</h1>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "Tooltip" }) => (
  <div className="relative flex items-center justify-center w-12 h-12 mx-auto mt-2 mb-2 text-green-500 transition-all duration-300 ease-linear bg-gray-400 shadow-lg cursor-pointer hover:bg-green-600 dark:bg-gray-800 hover:text-white hover:rounded-xl rounded-3xl group">
    {icon}
    <span className="absolute w-auto p-2 m-2 text-xs font-bold text-white transition-all duration-100 origin-left scale-0 bg-gray-900 rounded-md shadow-md min-w-max left-14 group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => (
  <hr className="mx-2 bg-gray-200 border border-gray-200 rounded-full dark:bg-gray-800 dark:border-gray-800" />
);

export default DiscordNavbar;
