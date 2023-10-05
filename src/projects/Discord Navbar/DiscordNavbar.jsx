import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaAmazon } from "react-icons/fa";

const DiscordNavbar = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 flex flex-col w-16 h-screen bg-gray-900 shadow-lg">
        <SideBarIcon icon={<FaFire size="28" />} text="Discord" />
        <Divider />
        <SideBarIcon
          icon={<BsFillLightningFill size="20" />}
          text="Lightning"
        />
        <SideBarIcon icon={<FaAmazon size="20" />} text="Amazon" />
        <SideBarIcon icon={<BsPlus size="32" />} text="Add" />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" />
      </div>

      <div className="flex items-center justify-center w-screen h-screen">
        <h1 className="ml-16 text-xl font-bold md:text-5xl">Discord Navbar</h1>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="relative flex items-center justify-center w-12 h-12 mx-auto mt-2 mb-2 text-green-500 transition-all duration-300 ease-linear bg-gray-600 shadow-lg cursor-pointer hover:bg-green-600 hover:text-white hover:rounded-xl rounded-3xl group">
    {icon}
    <span className="absolute w-auto p-2 m-2 text-xs font-bold text-white transition-all duration-100 origin-left scale-0 bg-gray-900 rounded-md shadow-md min-w-max left-14 group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => (
  <hr className="mx-2 bg-gray-200 border border-gray-800 rounded-full" />
);

export default DiscordNavbar;
