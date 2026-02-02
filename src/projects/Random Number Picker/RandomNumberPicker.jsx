import { useState } from "react";

const RandomNumberPicker = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const getRandomNumber = () => {
    setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <div className="w-full max-w-100 m-auto flex flex-col p-7.5 bg-[#04042b]">
        <div className="bg-[#181831] p-5 flex justify-between">
          <p>Random Number</p>
          <span className="text-[#9cff9c] font-semibold">{randomNum}</span>
        </div>
        <div className="flex justify-between px-0 py-15 w-full">
          <div className="w-full max-w-[42%]">
            <p>Min: </p>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(+e.target.value)}
              className="p-[8px] border-none outline-none w-full bg-[#181831] text-[#9cff9c]"
            />
          </div>
          <div className="w-full max-w-[42%]">
            <p>Max: </p>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(+e.target.value)}
              className="p-2 border-none outline-none w-full bg-[#181831] text-[#9cff9c]"
            />
          </div>
        </div>
        <button
          className="self-end border-none outline-none bg-[#292977] text-white p-3.5 w-full text-[22px] cursor-pointer"
          onClick={getRandomNumber}
        >
          Get Random Number
        </button>
      </div>
    </div>
  );
};

export default RandomNumberPicker;
