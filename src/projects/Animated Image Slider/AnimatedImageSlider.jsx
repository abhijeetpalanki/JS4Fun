import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import images from "./images";

const AnimatedImageSlider = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setWidth(
      carouselRef.current.scrollWidth - 3 * carouselRef.current.offsetLeft
    );
  }, []);

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden mx-[20%] my-[10%]">
      {/* Carousel */}
      <motion.div
        ref={carouselRef}
        className="block overflow-hidden cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        {/* Inner Carousel */}
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex justify-start min-h-[40rem] min-w-[30rem]"
        >
          {images.map((image) => (
            <motion.div
              key={image}
              className="min-h-[40rem] min-w-[30rem] p-[40px]"
            >
              <img
                src={image}
                alt={image}
                className="w-full h-full rounded-[2rem] pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedImageSlider;
