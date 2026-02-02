import { useState, useEffect } from "react";
import Tile from "./Tile";
import Winner from "./Winner";
import "./MysticSquare.css";

const Overlay = () =>
  new Array(16)
    .fill()
    .map((_, i) => (
      <div
        key={i}
        className="border-10 border-[#55ab9f] pointer-events-none z-20"
      ></div>
    ));

const MysticSquare = () => {
  const shuffle = () =>
    new Array(16)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .map((x, i) => ({ value: x, index: i }));
  const [numbers, setNumbers] = useState([]);
  const [animating, setAnimating] = useState(false);

  const moveTile = (tile) => {
    const indexOfTile16 = numbers.find((t) => t.value === 16).index;
    if (
      ![
        indexOfTile16 - 1,
        indexOfTile16 + 1,
        indexOfTile16 - 4,
        indexOfTile16 + 4,
      ].includes(tile.index) ||
      animating
    )
      return;

    const newNumbers = [...numbers].map((number) => {
      if (number.index !== indexOfTile16 && number.index !== tile.index)
        return number;
      else if (number.value === 16) return { value: 16, index: tile.index };

      return { value: tile.value, index: indexOfTile16 };
    });

    setAnimating(true);
    setNumbers(newNumbers);

    setTimeout(() => setAnimating(false), 400);
  };

  const handleKeyDown = (e) => {
    const indexOfTile16 = numbers.find((t) => t.value === 16).index;

    if (e.keyCode === 37 && !(indexOfTile16 % 4 === 3))
      moveTile(numbers.find((n) => n.index === indexOfTile16 + 1));
    if (e.keyCode === 38 && !(indexOfTile16 > 11))
      moveTile(numbers.find((n) => n.index === indexOfTile16 + 4));
    if (e.keyCode === 39 && !(indexOfTile16 % 4 === 0))
      moveTile(numbers.find((n) => n.index === indexOfTile16 - 1));
    if (e.keyCode === 40 && !(indexOfTile16 < 4))
      moveTile(numbers.find((n) => n.index === indexOfTile16 - 4));
  };

  const reset = () => setNumbers(shuffle());

  useEffect(reset, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#64bdb0]">
      <h2 className="py-4 text-xl text-white">Mystic Square</h2>

      {/* Board */}
      <div className="relative">
        <div className="grid grid-cols-[repeat(4,100px)] grid-rows-[repeat(4,100px)] rounded-[10px] relative overflow-hidden border-10 border-[#55ab9f] ">
          <Overlay />

          {numbers.map((x, i) => (
            <Tile key={i} number={x} moveTile={moveTile} />
          ))}
          <Winner numbers={numbers} />
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={reset}
            className="border-[0_transparent] bg-[#6e50b4] text-white py-2.5 px-5 text-xl hover:bg-[#342956]"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default MysticSquare;
