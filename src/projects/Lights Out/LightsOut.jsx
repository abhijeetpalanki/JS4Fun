import { useState } from "react";
import Cell from "./Cell";

const LightsOut = () => {
  const createGrid = () =>
    new Array(5)
      .fill()
      .map(() => new Array(5).fill().map(() => Math.random() < 0.4));

  const [board, setBoard] = useState(createGrid());

  const toggleLights = (row, col) => {
    const copy = [...board.map((r) => [...r])];

    copy[row][col] = !copy[row][col];
    if (row < 4) copy[row + 1][col] = !copy[row + 1][col];
    if (row > 0) copy[row - 1][col] = !copy[row - 1][col];
    if (col < 4) copy[row][col + 1] = !copy[row][col + 1];
    if (col > 0) copy[row][col - 1] = !copy[row][col - 1];

    setBoard(copy);
  };

  const gameEnds = () => board.every((row) => row.every((cell) => !cell));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#212121]">
      <div className="text-[50px] tracking-[2px] mb-6.25">
        <span className="text-[#fea501] animate-flicker">Lights</span>
        <span className="text-[#12e7e7] [text-shadow:0_0_25px_#12e7e7,0_0_75px_#12e7e7,0_0_150px_#12e7e7]">
          Out
        </span>
      </div>

      <div className="flex flex-col rounded-[10px] p-0.5 [box-shadow:0_0_2.5px_#000,0_0_12.5px_#fff]">
        {gameEnds() ? (
          <div className="text-white text-[50px] tracking-[2px] mb-0 px-6.25 [text-shadow:0_0_25px_#12e7e7,0_0_50px_#12e7e7,0_0_100px_#12e7e7]">
            You won!
          </div>
        ) : (
          board.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((_, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  isOn={board[rowIndex][colIndex]}
                  toggleLights={toggleLights}
                />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LightsOut;
