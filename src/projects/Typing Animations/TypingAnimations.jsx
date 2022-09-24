import React from "react";
import Typist from "react-typist";
import techBg from "./tech-bg.jpg";

const TypingAnimations = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen font-['Nunito']"
      style={{ background: `url(${techBg}) no-repeat center/cover` }}
    >
      <div className="flex flex-col justify-between px-0 text-white">
        <Typist cursor={{ show: false }}>
          <Typist.Delay ms={500} />
          <span className="block text-[21px] text-[#ca40ba] font-extrabold my-[3px] mx-0">
            &lt;body&gt;
          </span>
        </Typist>
        <div className="min-h-[248px]">
          <Typist cursor={{ show: false }}>
            <Typist.Delay ms={800} />
            <span className="block text-[21px] text-[#ca40ba] font-extrabold my-[3px] mx-0">
              &lt;h1&gt;
            </span>
            <h2 className="text-6xl leading-[1] drop-shadow-[4px_4px_1px_#ca40ba] pl-3">
              Hi <br /> I'm Abhijeet <br /> React Developer.
            </h2>
            <span className="block text-[21px] text-[#ca40ba] font-extrabold my-[3px] mx-0">
              &lt;/h1&gt;
            </span>
          </Typist>
        </div>
        <Typist cursor={{ show: false }}>
          <Typist.Delay ms={3800} />
          <span className="block text-[21px] text-[#ca40ba] font-extrabold my-[3px] mx-0">
            &lt;/body&gt;
          </span>
        </Typist>
      </div>
    </div>
  );
};

export default TypingAnimations;
