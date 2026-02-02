import { useState } from "react";
import { FaTimes, FaBars, FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";
import "./RotatingNavigation.css";

const RotatingNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rotating-navigation-body text-[#222] overflow-x-hidden m-0">
      <div
        className={`container bg-[#fafafa] origin-top-left transition-[transform] duration-500 ease-linear w-screen min-h-screen p-12.5 ${
          open ? "show-nav" : ""
        }`}
      >
        <div className="circle-container fixed -top-25 -left-25">
          <div className="circle bg-[#7996fc] h-50 w-50 rounded-full relative transition-[transform] duration-500 ease-linear">
            <button
              className="absolute top-[60%] left-1/2 h-25 bg-transparent border-0 text-[22px] text-white focus:outline-none rotate-90 origin-top-left"
              id="close"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>
            <button
              className="absolute top-1/2 left-[60%] h-25 bg-transparent border-0 text-[22px] text-white focus:outline-none"
              id="open"
              onClick={() => setOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className="content max-w-250 my-12.5 m-auto">
          <h1 className="m-0 text-[32px] font-bold">Amazing Article</h1>
          <small className="text-[#555] italic">Lorem ipsum</small>
          <p className="text-[#333] leading-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            eum ad suscipit facilis dolores nemo praesentium nesciunt provident
            consectetur sunt.
          </p>

          <h3 className="text-[20px] font-bold mt-2">My Dog</h3>
          <img
            className="w-1/2 max-w-lg md:w-full"
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy"
            loading="lazy"
          />
          <p className="text-[#333] leading-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
          </p>
        </div>
      </div>

      <nav className="fixed bottom-10 left-10 z-100">
        <ul className="list-none pl-1.25">
          <li className="uppercase  text-[#222] my-5 mx-0 -translate-x-full transition-[transform] duration-400 ease-in">
            <FaHome className="text-base mr-2.5 mt-1.25" /> Home
          </li>
          <li className="uppercase  text-[#222] my-5 mx-0 -translate-x-[150%] transition-[transform] duration-400 ease-in ml-3.75">
            <FaUserAlt className="text-base mr-2.5 mt-1.25" /> About
          </li>
          <li className="uppercase  text-[#222] my-5 mx-0 -translate-x-[200%] transition-[transform] duration-400 ease-in ml-7.5">
            <FaEnvelope className="text-base mr-2.5 mt-1.25" /> Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RotatingNavigation;
