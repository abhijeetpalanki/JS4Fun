import { useEffect, useRef } from "react";
import "./Hoverboard.css";
import colors from "./colors";

const Hoverboard = () => {
  const containerRef = useRef(null);
  const SQUARES = 500;

  useEffect(() => {
    for (let i = 0; i < SQUARES; i++) {
      const square = document.createElement("div");
      square.className =
        "bg-[#1d1d1d] [box-shadow:0_0_2px_#000] h-4 w-4 m-[2px] square";

      square.addEventListener("mouseover", () => setColor(square));
      square.addEventListener("mouseout", () => removeColor(square));

      containerRef.current.appendChild(square);
    }
  }, []);

  const setColor = (element) => {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const removeColor = (element) => {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="hoverboard-body bg-[#111] flex flex-col justify-center items-center h-screen m-0">
      <div
        className="container flex justify-center items-center flex-wrap max-w-[400px]"
        ref={containerRef}
      ></div>
    </div>
  );
};

export default Hoverboard;
