import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide, slide } from "./anim";
import Curve from "./Curve";

const CurvedMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const navItems = [
    { title: "Home" },
    { title: "Work" },
    { title: "About" },
    { title: "Contact" },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed right-0 m-5 w-20 h-20 bg-[#455ce9] rounded-full flex items-center justify-center cursor-pointer z-2"
      >
        <div
          className={`w-full after:content-[''] after:relative after:transition-all after:duration-300 after:block after:w-[40%] after:bg-white after:h-px after:m-auto after:-top-1.25 before:content-[''] before:relative before:transition-all before:duration-300 before:block before:w-[40%] before:bg-white before:h-px before:m-auto before:top-1.25 ${
            isActive
              ? "after:-top-px after:rotate-45 before:top-px before:-rotate-45"
              : ""
          }`}
        ></div>
      </div>

      {/* Nav */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className="fixed right-0 top-0 h-screen bg-[#292929] text-white"
          >
            <div className="p-25 h-full box-border flex flex-col justify-between">
              <div className="flex flex-col gap-3 mt-20 text-3xl">
                <div className="text-[#999999] border-b border-b-[#999999] uppercase text-[11px] mb-10">
                  <p className="">Navigation</p>
                </div>
                {navItems.map((item, index) => {
                  return (
                    <motion.div
                      variants={slide}
                      custom={index}
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      className="relative flex items-center"
                    >
                      <button className="font-light">{item.title}</button>
                    </motion.div>
                  );
                })}
              </div>
              <Curve />
              <div className="flex justify-between w-full gap-10 text-xs">
                <button className="font-light">Awwwards</button>
                <button className="font-light">Instagram</button>
                <button className="font-light">Dribble</button>
                <button className="font-light">LinkedIn</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurvedMenu;
