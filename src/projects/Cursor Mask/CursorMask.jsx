import { useState } from "react";
import mask from "./mask.svg";
import useMousePosition from "./useMousePosition";
import { motion } from "framer-motion";

const CursorMask = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="h-screen bg-[#0f0f0f]">
      <div className="relative h-screen">
        {/* Mask */}
        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className="mask flex items-center justify-center w-full h-full absolute text-[#afa18f] text-[64px] leading-[66px] cursor-default"
          style={{
            WebkitMaskImage: `url('${mask}')`,
            background: "#ec4e39",
            WebkitMaskRepeat: "no-repeat",
            color: "black",
          }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="w-[1000px]"
          >
            A visual designer - with skills that haven't been replaced by A.I
            (yet) - making good shit only if the paycheck is equally good.
          </p>
        </motion.div>
        {/* Body */}
        <div className="flex items-center justify-center w-full h-full body text-[#afa18f] text-[64px] leading-[66px] cursor-default">
          <p className="w-[1000px]">
            I'm a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
            product designer with strong focus on producing high quality &
            impactful digital experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CursorMask;
