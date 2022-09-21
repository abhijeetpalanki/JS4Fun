import React, { useState } from "react";
import { data } from "./data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const BackgroundImageSlider = () => {
  const [slides, setSlides] = useState(data);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="relative flex items-center justify-center h-screen">
      <FaArrowAltCircleLeft
        className="absolute top-[50%] left-8 text-5xl text-black z-10 cursor-pointer select-none"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute top-[50%] right-8 text-5xl text-black z-10 cursor-pointer select-none"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-[1] duration-1000 scale-[1.08]"
                : "opacity-0 duration-1000"
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className="w-[1000px] h-[600px] rounded-xl"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default BackgroundImageSlider;
