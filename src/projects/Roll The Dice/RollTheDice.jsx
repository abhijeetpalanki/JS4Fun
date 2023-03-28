import React, { useState } from "react";
import "./RollTheDice.css";
import dice01 from "../../images/dice-01.svg";
import dice02 from "../../images/dice-02.svg";
import dice03 from "../../images/dice-03.svg";
import dice04 from "../../images/dice-04.svg";
import dice05 from "../../images/dice-05.svg";
import dice06 from "../../images/dice-06.svg";
import { useRef } from "react";

const images = [dice01, dice02, dice03, dice04, dice05, dice06];

const RollTheDice = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [dieOne, setDieOne] = useState(dice01);
  const [dieTwo, setDieTwo] = useState(dice02);
  const [total, setTotal] = useState(3);
  const diceRef = useRef(null);

  const roll = () => {
    setIsShaking(true);

    let dieOneValue = getRandomNumber(0, 5);
    let dieTwoValue = getRandomNumber(0, 5);

    setDieOne(images[dieOneValue]);
    setDieTwo(images[dieTwoValue]);

    setTotal(dieOneValue + 1 + dieTwoValue + 1);
    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="flex flex-col items-center justify-center roll-the-dice-body h-screen">
      <div className="flex flex-col items-center w-[400px] p-[50px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white rounded-[8px] shadow-[0_15px_35px_rgba(50, 50, 50, 0.2)] font-['Poppins']">
        <div className="dice-wrapper w-[90%] flex justify-around" ref={diceRef}>
          <img src={dieOne} alt={dieOne} className={isShaking ? "shake" : ""} />
          <img src={dieTwo} alt={dieTwo} className={isShaking ? "shake" : ""} />
        </div>
        <p className="text-[16px] flex justify-around my-[30px] mx-0 font-[500]">
          Your roll total: ({total})
        </p>
        <button
          className="bg-[#e92e3d] border-none outline-none text-white py-[15px] px-0 w-[150px] tracking-[1px] rounded-[5px]"
          onClick={roll}
        >
          ROLL THE DICE
        </button>
      </div>
    </div>
  );
};

export default RollTheDice;
