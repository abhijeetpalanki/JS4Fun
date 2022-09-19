import React, { useRef } from "react";
import "./AnimatedNavigation.css";

const AnimatedNavigation = () => {
  const navRef = useRef();

  const toggleButton = () => navRef.current.classList.toggle("active");

  return (
    <div className="animated-navigation-body font-['Muli'] bg-[#eafbff] flex items-center justify-center h-screen m-0">
      <nav
        className="active bg-white p-5 w-20 flex items-center justify-center rounded-[3px]"
        id="nav"
        ref={navRef}
      >
        <ul className="flex w-0 p-0 m-0 list-none">
          <li>
            <a className="relative text-black my-0 mx-[10px]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="relative text-black my-0 mx-[10px]" href="#">
              About
            </a>
          </li>
          <li>
            <a className="relative text-black my-0 mx-[10px]" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="relative text-black my-0 mx-[10px]" href="#">
              Work
            </a>
          </li>
        </ul>

        <button
          className="icon bg-white border-0 p-0 relative h-[30px] w-[30px] focus:outline-none"
          id="toggle"
          onClick={toggleButton}
        >
          <div className="line line1 bg-[#5290f9] h-[2px] w-5 absolute top-[10px] left-[5px]"></div>
          <div className="line line2 bg-[#5290f9] h-[2px] w-5 absolute top-auto left-[5px] bottom-[10px]"></div>
        </button>
      </nav>
    </div>
  );
};

export default AnimatedNavigation;
