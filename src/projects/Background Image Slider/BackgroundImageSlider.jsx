import React, { useEffect, useRef } from "react";
import "./BackgroundImageSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BackgroundImageSlider = () => {
  const sliderBodyRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
    let activeSlide = 0;

    const setBgToBody = () => {
      sliderBodyRef.current.style.backgroundImage =
        slides[activeSlide].style.backgroundImage;
    };

    const setActiveSlide = () => {
      slides.forEach((slide) => slide.classList.remove("active"));

      slides[activeSlide].classList.add("active");
    };

    leftBtn.addEventListener("click", () => {
      activeSlide--;

      if (activeSlide < 0) {
        activeSlide = slides.length - 1;
      }

      setBgToBody();
      setActiveSlide();
    });

    rightBtn.addEventListener("click", () => {
      activeSlide++;

      if (activeSlide > slides.length - 1) {
        activeSlide = 0;
      }

      setBgToBody();
      setActiveSlide();
    });

    setBgToBody();
  }, []);

  return (
    <div
      className="background-image-slider-body bg-cover font-['Poppins'] h-screen flex justify-center items-center m-0"
      ref={sliderBodyRef}
    >
      <div className="slider-container h-[70vh] w-[70vw] relative overflow-hidden">
        <div
          className="slide bg-center active opacity-0 h-screen w-[100vw] bg-cover absolute -top-[15vh] -left-[15vw] z-[1000]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
          }}
        ></div>
        <div
          className="slide bg-center opacity-0 h-screen w-[100vw] bg-cover absolute -top-[15vh] -left-[15vw] z-[1000]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')",
          }}
        ></div>

        <div
          className="slide bg-center opacity-0 h-screen w-[100vw] bg-cover absolute -top-[15vh] -left-[15vw] z-[1000]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
          }}
        ></div>

        <div
          className="slide bg-center opacity-0 h-screen w-[100vw] bg-cover absolute -top-[15vh] -left-[15vw] z-[1000]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')",
          }}
        ></div>

        <div
          className="slide bg-center opacity-0 h-screen w-[100vw] bg-cover absolute -top-[15vh] -left-[15vw] z-[1000]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
          }}
        ></div>

        <button
          className="arrow left-arrow fixed bg-transparent p-5 text-3xl border-2 border-[orange] top-1/2 text-white z-[100]"
          id="left"
        >
          <FaArrowLeft />
        </button>

        <button
          className="arrow right-arrow fixed bg-transparent p-5 text-3xl border-2 border-[orange] top-1/2 text-white z-[100]"
          id="right"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BackgroundImageSlider;
