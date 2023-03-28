import React, { useState } from "react";
import "./SplitLandingPage.css";
import ps from "../../images/ps.jpg";
import xbox from "../../images/xbox.jpg";

const SplitLandingPage = () => {
  const [hoverClass, setHoverClass] = useState(false);

  return (
    <div className="split-landing-page-body font-['Roboto'] h-screen overflow-hidden m-0">
      <div
        className={`container relative w-full h-full bg-[#333] ${
          hoverClass ? "hover-left" : "hover-right"
        }`}
      >
        <div
          className="split left absolute w-1/2 h-full overflow-hidden left-0 bg-no-repeat bg-cover"
          style={{ background: `url(${ps})` }}
          onMouseEnter={() => setHoverClass(true)}
          onMouseLeave={() => setHoverClass(false)}
        >
          <h1 className="text-[4rem] text-white absolute left-1/2 top-[20%] -translate-x-1/2 whitespace-nowrap">
            Playstation 5
          </h1>
          <a
            href="https://www.playstation.com/en-us/ps5/buy-now/"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </a>
        </div>
        <div
          className="split right absolute w-1/2 h-full overflow-hidden right-0 bg-no-repeat bg-cover"
          style={{ background: `url(${xbox})` }}
        >
          <h1 className="text-[4rem] text-white absolute left-1/2 top-[20%] -translate-x-1/2 whitespace-nowrap">
            Xbox Series X
          </h1>
          <a
            href="https://www.xbox.com/en-US/consoles/xbox-series-x"
            className="btn"
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
