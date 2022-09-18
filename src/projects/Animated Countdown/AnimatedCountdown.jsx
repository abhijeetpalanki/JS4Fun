import React, { useEffect, useRef, useState } from "react";
import "./AnimatedCountdown.css";

const AnimatedCountdown = () => {
  const counterRef = useRef(null);
  const finalRef = useRef(null);
  const replayButtonRef = useRef(null);

  useEffect(() => {
    const nums = document.querySelectorAll(
      ".animated-countdown-body .counter .nums span"
    );

    runAnimation(nums);

    replayButtonRef.current.addEventListener("click", () => {
      resetDOM(nums);
      runAnimation(nums);
    });
  }, []);

  const runAnimation = (nums) => {
    nums.forEach((num, index) => {
      const nextToLast = nums.length - 1;

      num.addEventListener("animationend", (e) => {
        if (e.animationName === "goIn" && index !== nextToLast) {
          num.classList.remove("in");
          num.classList.add("out");
        } else if (e.animationName === "goOut" && num.nextElementSibling) {
          num.nextElementSibling.classList.add("in");
        } else {
          counterRef.current.classList.add("hide");
          finalRef.current.classList.add("show");
        }
      });
    });
  };

  const resetDOM = (nums) => {
    counterRef.current.classList.remove("hide");
    finalRef.current.classList.remove("show");

    nums.forEach((num) => {
      num.classList.value = "";
    });

    nums[0].classList.add("in");
  };

  return (
    <div className="animated-countdown-body h-[100vh] m-0 font-['Poppins']">
      <div
        className="fixed text-center counter top-1/2 left-1/2"
        ref={counterRef}
      >
        <div className="nums relative overflow-hidden w-[250px] h-[50px] text-[50px] text-[#3498db]">
          <span className="absolute in top-1/2 left-1/2">3</span>
          <span className="absolute top-1/2 left-1/2">2</span>
          <span className="absolute top-1/2 left-1/2">1</span>
          <span className="absolute top-1/2 left-1/2">0</span>
        </div>
        <h4 className="text-xl m-[5px] uppercase font-bold">Get Ready</h4>
      </div>

      <div
        className="fixed text-center translate-x-1/2 translate-y-1/2 final top-1/2 left-1/2"
        ref={finalRef}
      >
        <h1 className="text-[50px] font-bold">GO</h1>

        <button
          className="btn text-white items-center appearance-none border-0 rounded-md h-12 inline-flex justify-center leading-[1px] pl-4 pr-4 relative text-left no-underline text-lg list-none"
          ref={replayButtonRef}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
