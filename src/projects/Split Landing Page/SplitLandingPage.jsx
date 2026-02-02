import { useState } from "react";
import ps from "./ps.jpg";
import xbox from "./xbox.jpg";

const SplitLandingPage = () => {
  const [hoverClass, setHoverClass] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center overflow-hidden before:absolute before:content-[''] before:w-full before:h-full">
      <div
        className={`relative w-full h-full bg-[#333] ${
          hoverClass ? "group/left" : "group/right"
        }`}
      >
        <div
          className="absolute left-0 w-1/2 h-full overflow-hidden bg-no-repeat bg-cover group-hover/left:w-3/4 group-hover/right:w-1/4 group-hover/left:transition-all group-hover/left:duration-1000 group-hover/left:ease-in-out group-hover/right:transition-all group-hover/right:duration-1000 group-hover/right:ease-in-out"
          style={{ background: `url(${ps})` }}
          onMouseEnter={() => setHoverClass(true)}
          onMouseLeave={() => setHoverClass(false)}
        >
          <h1 className="text-[2rem] md:text-[4rem] text-white absolute left-1/2 top-[30%] md:top-[20%] -translate-x-1/2 whitespace-nowrap">
            Playstation 5
          </h1>
          <a
            href="https://www.playstation.com/en-us/ps5/buy-now/"
            className="absolute flex items-center justify-center left-1/2 top-[40%] -translate-x-1/2 uppercase text-white border-[0.2rem] text-base font-bold w-48 md:w-60 p-[1.2rem] md:p-6 hover:bg-[hsl(241,80%,63%)] border-[#5754ec]"
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </a>
        </div>
        <div
          className="absolute right-0 w-1/2 h-full overflow-hidden bg-no-repeat bg-cover group-hover/left:w-1/4 group-hover/right:w-3/4 group-hover/left:transition-all group-hover/left:duration-1000 group-hover/left:ease-in-out group-hover/right:transition-all group-hover/right:duration-1000 group-hover/right:ease-in-out before:absolute before:content-[''] before:w-full before:h-full before:bg-[#2b2b2bcc]"
          style={{ background: `url(${xbox})` }}
        >
          <h1 className="text-[2rem] md:text-[4rem] text-white absolute left-1/2 top-[30%] md:top-[20%] -translate-x-1/2 whitespace-nowrap">
            Xbox Series X
          </h1>
          <a
            href="https://www.xbox.com/en-US/consoles/xbox-series-x"
            className="absolute flex items-center justify-center left-1/2 top-[40%] -translate-x-1/2 uppercase text-white border-[0.2rem] text-base font-bold w-48 md:w-60 p-[1.2rem] md:p-6 hover:bg-[#1c7a1c] border-[#1c7a1c]"
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SplitLandingPage;
