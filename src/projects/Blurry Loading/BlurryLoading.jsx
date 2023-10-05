import { useRef, useState } from "react";
import rays from "./rays.jpg";
import { useInterval } from "../../hooks/useInterval";

const BlurryLoading = () => {
  const [loadCount, setLoadCount] = useState(0);
  const loadTextRef = useRef();
  const bgRef = useRef();

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
    <div className="flex items-center justify-center w-screen h-screen m-0 overflow-hidden">
      <section
        ref={bgRef}
        className="absolute top-0 left-0 z-0 w-screen h-screen blur-none"
        style={{ background: `url(${rays}) no-repeat center center/cover` }}
      ></section>
      <div
        className="loading-text text-[50px] text-white z-50"
        ref={loadTextRef}
      >
        0%
      </div>
    </div>
  );
};

export default BlurryLoading;
