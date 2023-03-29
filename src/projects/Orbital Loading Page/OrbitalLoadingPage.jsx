import React from "react";
import { useRef, useEffect } from "react";
import { colorArray } from "./colors";

const OrbitalLoadingPage = () => {
  const squareRef = useRef(null);

  useEffect(() => {
    const numOfPlanets = 50;

    const squareDiv = squareRef.current;
    for (let i = 0; i < numOfPlanets; i++) {
      const childToAppend = document.createElement("span");
      squareDiv.appendChild(childToAppend);
    }

    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      const randomHeight = Math.random() * 400 + 0.8 * 600; // height between 600 and 1000
      const randomWidth = Math.random() * 600 + 0.8 * 400; // width between 400 and 1000

      span.className =
        "absolute bg-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbitalSpin";
      span.style.height = `${randomHeight}px`;
      span.style.width = `${randomWidth}px`;

      const randomInterval = Math.floor(Math.random() * 10000 + 10000);
      const randomDelay = Math.floor(Math.random() * 20000);
      span.style.animationDuration = `${randomInterval}ms`;
      span.style.animationDelay = `-${randomDelay}ms`;

      const childNode = document.createElement("div");
      childNode.className = "absolute top-0 left-0 rounded-full";
      const divRadius = Math.random() * 10 + 2;
      childNode.style.height = `${divRadius}px`;
      childNode.style.width = `${divRadius}px`;

      const lengthOfColors = colorArray.length;
      const randomColorIndex = Math.floor(Math.random() * lengthOfColors);
      const randomColor = colorArray[randomColorIndex];
      childNode.style.background = randomColor;
      childNode.style.boxShadow = `0 0 1px 1px ${randomColor}`;

      span.appendChild(childNode);
    });
  }, []);

  return (
    <div className="bg-[#0f172a] text-white font-['Jost']">
      <div className="h-screen py-[100px] px-[10px]">
        <div
          ref={squareRef}
          className="h-[720px] w-[1280px] flex flex-col justify-center items-center my-0 mx-auto relative"
        >
          <h1 className="uppercase text-[7rem] font-extrabold relative z-10">
            Orbital
          </h1>
          <p className="uppercase text-[4rem] font-normal leading-4 relative z-10">
            Loading Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrbitalLoadingPage;
