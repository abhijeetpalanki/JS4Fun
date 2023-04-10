import React from "react";

const Header = ({ dateDisplay, onNext, onBack }) => {
  return (
    <div
      id="header"
      className="p-[10px] text-[#d36c6c] text-[26px] flex justify-between"
    >
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button
          onClick={onBack}
          className="bg-[#92a1d1] mx-[2.5px] w-[75px] shadow-[0_0_2px_gray] border-none outline-none p-[5px] rounded-[5px] text-white"
          id="backButton"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#92a1d1] mx-[2.5px] w-[75px] shadow-[0_0_2px_gray] border-none outline-none p-[5px] rounded-[5px] text-white"
          id="nextButton"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Header;
