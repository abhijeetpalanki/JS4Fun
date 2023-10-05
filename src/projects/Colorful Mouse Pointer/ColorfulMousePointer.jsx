import { useEffect } from "react";
import {
  clr01,
  clr02,
  clr03,
  clr04,
  clr05,
  clr06,
  clr07,
  clr08,
  clr09,
  clr10,
  clr11,
  clr12,
  clr13,
  clr14,
  clr15,
  clr16,
} from "./images";

const ColorfulMousePointer = () => {
  useEffect(() => {
    let images = [
      clr01,
      clr02,
      clr03,
      clr04,
      clr05,
      clr06,
      clr07,
      clr08,
      clr09,
      clr10,
      clr11,
      clr12,
      clr13,
      clr14,
      clr15,
      clr16,
    ];
    let body = document.querySelector(".mouse-pointer-body");
    body.onclick = function (e) {
      let x = e.pageX - e.target.offsetLeft;
      let y = e.pageY - e.target.offsetTop;

      let splash = document.createElement("span");
      splash.className = `absolute pointer-events-none w-[100px] h-[100px] md:w-[300px] md:h-[300px] animate-colorSplash`;
      let bg = `url('${images[Math.floor(Math.random() * images.length)]}')`;
      splash.style.backgroundImage = bg;
      splash.style.backgroundSize = "contain";
      splash.style.backgroundRepeat = "no-repeat";
      splash.style.left = x + "px";
      splash.style.top = y + "px";

      this.appendChild(splash);

      setTimeout(() => {
        splash.remove();
      }, 4000);
    };
  }, []);

  return (
    <div className="mouse-pointer-body h-screen flex justify-center items-center bg-[#222] overflow-hidden">
      <h2 className="text-white text-[8vw] select-none pointer-events-none drop-shadow-[0_20px_30px_#0000003f] z-[1000]">
        Click for a Colorful Splash
      </h2>
    </div>
  );
};

export default ColorfulMousePointer;
