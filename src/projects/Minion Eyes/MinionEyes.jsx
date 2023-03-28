import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MinionEyes.css";

const MinionEyes = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#f5d60e",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#f5d60e]">
      {/* Quote */}
      <div className="flex">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-[32px]"
        >
          C'est banana! Hahaha! Miam Miam! Huh?
        </h1>
        <motion.div
          className="cursor cursor-none pointer-events-none bg-[#111] h-[32px] w-[32px] rounded-full fixed top-0 left-0"
          variants={variants}
          animate={cursorVariant}
        ></motion.div>
      </div>

      {/* Container */}
      <div className="flex justify-center items-center before:absolute before:w-full before:h-[4em] before:bg-[#231f1e] before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2">
        {/* Eyes Wrapper */}
        <div className="flex before:absolute before:w-[26em] before:h-[6em] before:bg-[#a8a7ac] before:m-auto before:left-0 before:right-0 before:top-0 before:bottom-0">
          {/* Eye */}
          <div className="w-[12em] h-[12em] border-[15px] border-[#a6a4ad] bg-white rounded-full z-10">
            {/* Eyeball */}
            <div className="h-[3.2em] w-[3.2em] rounded-full my-[3.2em] mx-[3.5em] relative eyeball before:absolute before:bg-white before:h-[0.7em] before:w-[0.5em] before:rounded-full before:top-[13px] before:left-[13px] before:rotate-[45deg]"></div>
          </div>
          {/* Eye */}
          <div className="w-[12em] h-[12em] border-[15px] border-[#a6a4ad] bg-white rounded-full z-10">
            {/* Eyeball */}
            <div className="h-[3.2em] w-[3.2em] rounded-full my-[3.2em] mx-[3.5em] relative eyeball before:absolute before:bg-white before:h-[0.7em] before:w-[0.5em] before:rounded-full before:top-[13px] before:left-[13px] before:rotate-[45deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinionEyes;
