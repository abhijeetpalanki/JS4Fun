import { useState, useRef } from "react";
import { dice01, dice02, dice03, dice04, dice05, dice06 } from "./images";

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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center w-[300px] md:w-[400px] p-[50px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white rounded-[8px] shadow-[0_15px_35px_#32323233]">
        <div className="w-[90%] flex justify-around" ref={diceRef}>
          <img
            src={dieOne}
            alt={dieOne}
            className={isShaking ? "animate-diceShake" : ""}
            loading="lazy"
          />
          <img
            src={dieTwo}
            alt={dieTwo}
            className={isShaking ? "animate-diceShake" : ""}
            loading="lazy"
          />
        </div>
        <p className="text-[16px] flex justify-around my-[30px] mx-0 font-[500]">
          Your roll total: ({total})
        </p>
        <button
          className="bg-[#7996fc] border-none outline-none text-white py-[15px] px-0 w-[150px] tracking-[1px] rounded-[5px]"
          onClick={roll}
        >
          ROLL THE DICE
        </button>
      </div>
    </div>
  );
};

export default RollTheDice;
