import { useState, useEffect } from "react";

const ActiveCoin = ({ turn, setTurn, dropped, setDropped }) => {
  const [column, setColumn] = useState(5);
  const [row, setRow] = useState();

  const handleKeyDown = (e) => {
    if (e.keyCode === 37 && column > 0) setColumn(column - 1);
    else if (e.keyCode === 39) {
      if (column === undefined) {
        setColumn(1);
      } else if (column < 6) {
        setColumn(column + 1);
      }
    } else if (e.keyCode === 32 || e.keyCode === 13) {
      if (dropped.find((drop) => drop.x === 0 && drop.y === (column || 0)))
        return;

      const length =
        5 - dropped.filter((drop) => drop.y === (column || 0)).length;
      setRow(length);

      setTimeout(() => {
        setDropped([...dropped, { x: length, y: column || 0, player: turn }]);
        setTurn(turn === 1 ? 2 : 1);
      }, 500);
    }
  };

  useEffect(() => {
    setColumn();
    setRow();
  }, [turn]);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyDown, false);

    return () => document.removeEventListener("keyup", handleKeyDown);
  });

  return (
    <div
      className={`w-25 h-25 rounded-full absolute ${
        turn === 1 ? "bg-[#3483e0]" : turn === 2 && "bg-[#ec0b07]"
      } column-${column === undefined ? "-" : column} row-${
        row === undefined ? "-" : row
      } active`}
    ></div>
  );
};

export default ActiveCoin;
