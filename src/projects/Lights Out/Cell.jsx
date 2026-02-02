import React from "react";

const Cell = ({ rowIndex, colIndex, isOn, toggleLights }) => {
  const handleClick = () => toggleLights(rowIndex, colIndex);

  return (
    <button
      className={`w-[25px] h-[25px] border-none m-[25px] rounded-full transition-all ${
        isOn
          ? "bg-[#12e7e7] [box-shadow:0_0_25px_#12e7e7,0_0_50px_#12e7e7]"
          : "bg-[#373737] "
      }`}
      onClick={handleClick}
    ></button>
  );
};

export default Cell;
