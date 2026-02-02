import { useEffect, useRef } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const DoubleVerticalSlider = () => {
  const sliderContainerRef = useRef(null);
  const slideRightRef = useRef(null);
  const slideLeftRef = useRef(null);
  let activeSlideIndex = 0;

  useEffect(() => {
    const slidesLength = slideRightRef.current.querySelectorAll("div").length;

    slideLeftRef.current.style.top = `-${(slidesLength - 1) * 100}vh`;
  }, []);

  const changeSlide = (direction) => {
    const slidesLength = slideRightRef.current.querySelectorAll("div").length;
    const sliderHeight = sliderContainerRef.current.clientHeight;

    if (direction === "up") {
      activeSlideIndex++;

      if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
      }
    } else if (direction === "down") {
      activeSlideIndex--;

      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
      }
    }

    slideRightRef.current.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
    slideLeftRef.current.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;
  };

  return (
    <div className="h-screen">
      <div
        className="relative w-screen h-screen overflow-hidden"
        ref={sliderContainerRef}
      >
        <div
          className="h-full w-[35%] absolute top-0 left-0 transition-[transform] duration-500 ease-in-out"
          ref={slideLeftRef}
        >
          <div className="bg-[#fd3555] flex flex-col items-center justify-center w-full h-full text-white">
            <h1 className="text-lg md:text-[40px] mb-2.5 -mt-25 md:-mt-7.5">
              Nature flower
            </h1>
            <p>All in pink</p>
          </div>
          <div className="bg-[#2A86BA] flex flex-col items-center justify-center w-full h-full text-white">
            <h1 className="text-lg md:text-[40px] mb-2.5 -mt-25 md:-mt-7.5">
              Bluuue Sky
            </h1>
            <p>with it's mountains</p>
          </div>
          <div className="bg-[#252E33] flex flex-col items-center justify-center w-full h-full text-white">
            <h1 className="text-lg md:text-[40px] mb-2.5 -mt-25 md:-mt-7.5">
              Lonely castle
            </h1>
            <p>in the wilderness</p>
          </div>
          <div className="bg-[#FFB866] flex flex-col items-center justify-center w-full h-full text-white">
            <h1 className="text-lg md:text-[40px] mb-2.5 -mt-25 md:-mt-7.5">
              Flying eagle
            </h1>
            <p>in the sunset</p>
          </div>
        </div>
        <div
          className="h-full absolute top-0 left-[35%] w-[65%] transition-[transform] duration-[0.5s] ease-in-out"
          ref={slideRightRef}
        >
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </div>
        <div className="action-buttons">
          <button
            className="down-button absolute left-[35%] top-1/2 z-100 bg-white border-0 text-[#aaa] text-[16px] p-3.75 -translate-x-full rounded-tl-[5px] rounded-bl-[5px] hover:text-[#222] focus:outline-none"
            onClick={() => changeSlide("down")}
          >
            <FaArrowDown />
          </button>
          <button
            className="up-button absolute left-[35%] top-1/2 z-100 bg-white border-0 text-[#aaa] text-[16px] p-3.75 -translate-y-full rounded-tr-[5px] rounded-br-[5px] hover:text-[#222] focus:outline-none"
            onClick={() => changeSlide("up")}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleVerticalSlider;
