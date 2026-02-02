import { motion, useMotionValue, useTransform } from "framer-motion";
import { Marginer } from "./Marginer";
import AirJordanImg from "./images/air-jordan-transparent.png";
import NikeImg from "./images/nike-logo.png";

const MotionActivatedCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`w-full perspective-[2000] flex items-center justify-center`}
      >
        <motion.div
          className="w-71.25 h-125 flex flex-col rounded-[25px] [box-shadow:0_2px_7px_1px_#1f1f1f33] bg-[#1d1f21] text-white relative cursor-grab"
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="w-full flex flex-col flex-[1.2] relative items-center justify-end py-[1em] px-3.75">
            <div className="absolute top-0 left-0 min-w-full min-h-full overflow-hidden rounded-tr-[25px]">
              <div className="absolute w-87.5 h-87.5 -top-[4.2em] -right-[10em] z-5 bg-[#fbbe01] rounded-full" />
            </div>
            <div className="absolute flex items-center justify-center w-full h-full">
              <motion.div
                className="w-auto h-47.5 z-99 select-none mr-[3em] mt-[4em]"
                style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
              >
                <img
                  src={AirJordanImg}
                  alt={"AirJordanImg"}
                  className="w-auto h-full select-none"
                />
              </motion.div>
            </div>
            <div className="text-white uppercase m-0 z-10 text-[76px] font-black">
              NIKE AIR
            </div>
          </div>
          <div className="flex flex-[0.8] py-0 px-[1em]">
            <div className="w-full h-full flex flex-col p-[2.5em_6px_0_6px] leading-[1.4]">
              <div className="text-lg font-extrabold text-white uppercase">
                NIKE
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-extrabold text-white uppercase">
                  AIR JORDAN 1 MID SE GC
                </div>
                <div className="text-lg font-extrabold text-white uppercase">
                  $856
                </div>
              </div>
              <Marginer direction="vertical" />
              <div className="flex items-center justify-between w-full">
                <div className="text-lg font-extrabold text-white uppercase">
                  YOUR NEXT SHOES
                </div>
                <button className="py-2.5 px-4 bg-[#fbbe01] text-white uppercase text-base font-bold border-[3px] border-transparent outline-none cursor-pointer transition-all duration-290 ease-in-out rounded-lg hover:bg-transparent hover:text-white hover:border-[#fbbe01]">
                  BUY
                </button>
              </div>
              <div className="w-full h-7.5 flex items-center justify-center">
                <img src={NikeImg} alt="NikeImg" className="w-auto h-3.25" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MotionActivatedCard;
