import { useState, useEffect } from "react";
import ActiveCoin from "./ActiveCoin";
import Winner from "./Winner";
import "./Connect4.css";

const Connect4 = () => {
  const rows = 6;
  const cols = 7;
  const board = new Array(rows).fill().map((_) => new Array(cols).fill(""));
  const [turn, setTurn] = useState(2);
  const [dropped, setDropped] = useState([]);
  const [winner, setWinner] = useState(0);

  const findWinner = () => {
    const p1 = dropped.filter((d) => d.player === 1);
    p1.forEach(({ x, y }) => {
      if (
        p1.find((m) => x === m.x + 1 && y === m.y) &&
        p1.find((m) => x === m.x + 2 && y === m.y) &&
        p1.find((m) => x === m.x + 3 && y === m.y)
      ) {
        setWinner(1);
      }

      if (
        p1.find((m) => x === m.x && y === m.y + 1) &&
        p1.find((m) => x === m.x && y === m.y + 2) &&
        p1.find((m) => x === m.x && y === m.y + 3)
      ) {
        setWinner(1);
      }

      if (
        p1.find((m) => x === m.x + 1 && y === m.y + 1) &&
        p1.find((m) => x === m.x + 2 && y === m.y + 2) &&
        p1.find((m) => x === m.x + 3 && y === m.y + 3)
      ) {
        setWinner(1);
      }

      if (
        p1.find((m) => x === m.x + 1 && y === m.y - 1) &&
        p1.find((m) => x === m.x + 2 && y === m.y - 2) &&
        p1.find((m) => x === m.x + 3 && y === m.y - 3)
      ) {
        setWinner(1);
      }
    });

    const p2 = dropped.filter((d) => d.player === 2);
    p2.forEach(({ x, y }) => {
      if (
        p2.find((m) => x === m.x + 1 && y === m.y) &&
        p2.find((m) => x === m.x + 2 && y === m.y) &&
        p2.find((m) => x === m.x + 3 && y === m.y)
      ) {
        setWinner(2);
      }

      if (
        p2.find((m) => x === m.x && y === m.y + 1) &&
        p2.find((m) => x === m.x && y === m.y + 2) &&
        p2.find((m) => x === m.x && y === m.y + 3)
      ) {
        setWinner(2);
      }

      if (
        p2.find((m) => x === m.x + 1 && y === m.y + 1) &&
        p2.find((m) => x === m.x + 2 && y === m.y + 2) &&
        p2.find((m) => x === m.x + 3 && y === m.y + 3)
      ) {
        setWinner(2);
      }

      if (
        p2.find((m) => x === m.x + 1 && y === m.y - 1) &&
        p2.find((m) => x === m.x + 2 && y === m.y - 2) &&
        p2.find((m) => x === m.x + 3 && y === m.y - 3)
      ) {
        setWinner(2);
      }
    });
  };

  const reset = () => {
    setTurn(1);
    setDropped([]);
    setWinner(0);
  };

  useEffect(() => {
    if (dropped.length === rows * cols) {
      setWinner(-1);
    }

    findWinner();
  }, [dropped.length]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center justify-center text-white bg-black">
        <h2>Instructions to play</h2>

        <p>use Arrow keys to move the coin</p>
        <p>use Enter key to drop it to the desired position</p>
      </div>

      <div className="grid place-content-center">
        {/* Dropzone */}
        <div className="h-37.5 relative">
          {dropped.map((m, i) => (
            <div
              key={i}
              className={`w-25 h-25 rounded-full absolute ${
                m.player === 1
                  ? "bg-[#3483e0]"
                  : m.player === 2 && "bg-[#ec0b07]"
              }`}
              style={{
                transform: `translate(${m.y * 100}px,${m.x * 100 + 150}px)`,
              }}
            ></div>
          ))}

          {winner ? (
            <Winner winner={winner} reset={reset} />
          ) : (
            <ActiveCoin
              turn={turn}
              setTurn={setTurn}
              dropped={dropped}
              setDropped={setDropped}
            />
          )}
        </div>

        {/* Board */}
        <div className="grid grid-cols-[repeat(7,100px)] grid-rows-[repeat(6,100px)] relative">
          {board.map((row, i) =>
            row.map((col, j) => <div key={i + "-" + j} className="clip"></div>),
          )}
        </div>
      </div>
    </div>
  );
};

export default Connect4;
