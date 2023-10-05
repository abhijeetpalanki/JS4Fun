import { useState } from "react";
import { motion } from "framer-motion";
import {
  AirpodMaxBackgroundImg,
  AirpodMaxImg,
  LightingCableImg,
  AirpodMaxFrontImg,
  AirpodMaxSmartCaseImg,
} from "./images";

const AirpodsCard = () => {
  const [active, setActive] = useState("overview");

  const switchToBuy = () => {
    setActive("buy");
  };

  let animate = {};
  if (active === "overview") {
    animate = { x: 0 };
  } else if (active === "buy") {
    animate = { x: -290 };
  }

  let animateAirpodsMax = {};
  if (active === "buy") {
    animateAirpodsMax = { opacity: 1 };
  } else if (active === "overview") {
    animateAirpodsMax = { opacity: 0 };
  }

  const transition = {
    type: "tween",
    duration: 0.8,
  };

  return (
    <div className="flex items-center justify-center h-screen font-['Heebo'] bg-white">
      <div className="w-[290px] h-[580px] flex rounded-[28px] shadow-[0_0_12px_1px_#0f0f0f1e] relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={animateAirpodsMax}
          transition={{ type: "tween", duration: 1 }}
          className="w-auto h-[23em] absolute -top-[2.9em] -right-[1.7em] z-[99]"
        >
          <img className="w-auto h-full" src={AirpodMaxImg} alt="" />
        </motion.div>

        <div className="flex w-full h-full overflow-hidden rounded-[28px]">
          {/* Overview */}
          <motion.div
            animate={animate}
            transition={transition}
            className="flex flex-col-reverse items-center min-w-full min-h-full pb-[3em] z-[100]"
            style={{
              background: `url(${AirpodMaxBackgroundImg}) no-repeat center center/cover`,
            }}
          >
            <button
              className="py-[15px] px-[2.4em] text-lg outline-none border-none rounded-[28px] text-white font-semibold bg-[#82947e] transition-all duration-300 ease-in-out hover:bg-[#5d7756]"
              onClick={switchToBuy}
            >
              Overview
            </button>
            <div className="flex flex-col leading-tight mb-[1.8em]">
              <h1 className="m-0 text-white text-[60px] font-bold">Airpods</h1>
              <h1 className="m-0 text-white text-[60px] font-bold">Max</h1>
            </div>
          </motion.div>

          {/* Buy Product */}
          <motion.div
            animate={animate}
            transition={transition}
            className="min-h-full min-w-full flex flex-col-reverse rounded-[28px] bg-[#91a98b] p-3"
          >
            <div className="flex flex-col w-full h-2/5 justify-around bg-[#fafafa] rounded-[30px] py-3 px-4">
              <div className="flex justify-around w-full">
                <div className="w-auto h-[6em]">
                  <img
                    className="w-auto h-full"
                    src={AirpodMaxFrontImg}
                    alt=""
                  />
                </div>
                <div className="w-auto h-[6em]">
                  <img
                    className="w-auto h-full"
                    src={AirpodMaxSmartCaseImg}
                    alt=""
                  />
                </div>
                <div className="w-auto h-[6em]">
                  <img
                    className="w-auto h-full"
                    src={LightingCableImg}
                    alt=""
                  />
                </div>
              </div>

              <button className="py-[15px] px-[2.4em] text-lg outline-none border-none rounded-[28px] text-white font-semibold bg-[#82947e] transition-all duration-300 ease-in-out hover:bg-[#5d7756]">
                Buy
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AirpodsCard;
