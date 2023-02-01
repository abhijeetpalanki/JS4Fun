import React from "react";
import code from "../../images/code.png";

const ServicesCard = () => {
  return (
    <div className="bg-[#333] font-['Poppins'] flex justify-center items-center h-screen m-0">
      <div className="flex relative py-[80px] px-[40px] justify-center items-center flex-wrap gap-[80px]">
        <div className="relative w-[350px] h-[180px] bg-white duration-500 hover:h-[450px] card">
          <div className="absolute inset-0 overflow-hidden bg-black before:animate-expand lines"></div>
          <div className="imgBx absolute w-[150px] h-[150px] bg-black duration-500 z-10 overflow-hidden flex justify-center items-center -top-[60px] left-[50%] -translate-x-[50%]">
            <img
              className="absolute z-[1] invert-[1] opacity-[0.5] w-[100px]"
              src={code}
              alt=""
            />
          </div>
          <div className="absolute w-full h-full flex justify-center items-center text-center overflow-hidden content">
            <div className="p-[30px_20px] w-full duration-500 details">
              <h2 className="text-[1.5em] font-medium text-[#45f3ff] leading-[1.2em]">
                Development
              </h2>
              <p className="text-white opacity-0 duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                minus, explicabo omnis tenetur iure perferendis quasi cumque
                dolor praesentium facilis assumenda dicta deleniti commodi
                rerum? Praesentium ipsa magni assumenda beatae.
              </p>
              <button className="inline-block p-[8px_15px] bg-[#45f3ff] text-[#292929] mt-[10px] font-medium opacity-0 duration-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;