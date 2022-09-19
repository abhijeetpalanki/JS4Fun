import React, { useEffect } from "react";
import "./IncrementingCounter.css";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const IncrementingCounter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <div className="incrementing-counter-body font-['Roboto Mono'] bg-[#8e44ad] text-white flex items-center justify-center h-screen m-0">
      <div className="counter-container flex flex-col justify-center items-center my-[30px] mx-[50px]">
        <FaTwitter size={42} />
        <div className="counter text-6xl mt-[10px]" data-target="12000"></div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-container flex flex-col justify-center items-center my-[30px] mx-[50px]">
        <FaYoutube size={42} />
        <div className="counter text-6xl mt-[10px]" data-target="5000"></div>
        <span>Youtube Subscribers</span>
      </div>

      <div className="counter-container flex flex-col justify-center items-center my-[30px] mx-[50px]">
        <FaFacebook size={42} />
        <div className="counter text-6xl mt-[10px]" data-target="7500"></div>
        <span>Facebook Fans</span>
      </div>
    </div>
  );
};

export default IncrementingCounter;
