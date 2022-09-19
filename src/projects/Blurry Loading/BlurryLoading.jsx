import React, { useRef, useState } from "react";
import rays from "../../images/rays.jpg";
import { useInterval } from "./useInterval";

const BlurryLoading = () => {
  const [loadCount, setLoadCount] = useState(0);
  const loadTextRef = useRef();
  const bgRef = useRef();

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useInterval(() => {
    if (loadCount < 100) {
      setLoadCount((loadCount) => loadCount + 1);
    }
    loadTextRef.current.innerHTML = `${loadCount}%`;
    loadTextRef.current.style.opacity = scale(loadCount, 0, 100, 1, 0);
    bgRef.current.style.filter = `blur(${scale(loadCount, 0, 100, 30, 0)}px)`;
  }, 30);

  return (
    <div className="font-['Ubuntu'] w-[100vw] h-screen flex justify-center items-center overflow-hidden m-0">
      <section
        ref={bgRef}
        className="bg absolute top-0 left-0 w-[100vw] h-screen z-0 blur-none"
        style={{ background: `url(${rays}) no-repeat center center/cover` }}
      ></section>
      <div
        className="loading-text text-[50px] text-white z-[100]"
        ref={loadTextRef}
      >
        0%
      </div>
    </div>
  );
};

export default BlurryLoading;
