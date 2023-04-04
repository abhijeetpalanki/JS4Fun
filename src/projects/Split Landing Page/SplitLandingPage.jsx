import { useState } from "react";
import "./SplitLandingPage.css";
import ps from "./ps.jpg";
import xbox from "./xbox.jpg";

const SplitLandingPage = () => {
  const [hoverClass, setHoverClass] = useState(false);

  return (
    <div className="split-landing-page-body font-['Roboto'] h-screen flex justify-center items-center overflow-hidden m-0 before:absolute before:content-[''] before:w-full before:h-full before:bg-[rgba(87,84,236,0.7)]">
      <div
        className={`container relative w-full h-full bg-[#333] ${
          hoverClass ? "hover-left" : "hover-right"
        }`}
      >
        <div
          className="absolute left-0 w-1/2 h-full overflow-hidden bg-no-repeat bg-cover split left"
          style={{ background: `url(${ps})` }}
          onMouseEnter={() => setHoverClass(true)}
          onMouseLeave={() => setHoverClass(false)}
        >
          <h1 className="text-[4rem] text-white absolute left-1/2 top-[20%] -translate-x-1/2 whitespace-nowrap">
            Playstation 5
          </h1>
          <a
            href="https://www.playstation.com/en-us/ps5/buy-now/"
            className="absolute flex items-center justify-center left-1/2 top-[40%] -translate-x-1/2 uppercase text-white border-[0.2rem] border-white text-base font-bold w-[15rem] p-6 hover:bg-[rgba(87,84,236,1)] border-[rgba(87,84,236,1)]"
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </a>
        </div>
        <div
          className="absolute right-0 w-1/2 h-full overflow-hidden bg-no-repeat bg-cover split right before:absolute before:content-[''] before:w-full before:h-full before:bg-[rgba(43,43,43,0.8)]"
          style={{ background: `url(${xbox})` }}
        >
          <h1 className="text-[4rem] text-white absolute left-1/2 top-[20%] -translate-x-1/2 whitespace-nowrap">
            Xbox Series X
          </h1>
          <a
            href="https://www.xbox.com/en-US/consoles/xbox-series-x"
            className="absolute flex items-center justify-center left-1/2 top-[40%] -translate-x-1/2 uppercase text-white border-[0.2rem] border-white text-base font-bold w-[15rem] p-6 hover:bg-[rgba(28,122,28,1)] border-[rgba(28,122,28,1)]"
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
