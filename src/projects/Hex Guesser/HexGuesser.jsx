import { useState, useEffect } from "react";

const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const randomColor = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");

  return `#${randomColor}`;
};

const HexGuesser = () => {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(undefined);

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer) => {
    if (answer === color) {
      setResult(true);
      generateColors();
    } else {
      setResult(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-3 text-3xl font-bold md:text-6xl">Hex Guesser</h1>
      <div
        className="w-[200px] h-[200px] mb-5"
        style={{ background: color }}
      ></div>

      <div className="flex justify-between mb-5">
        {answers.map((answer) => (
          <button
            onClick={() => handleAnswerClicked(answer)}
            className="p-3 m-1 text-xl text-white bg-black"
            key={answer}
          >
            {answer}
          </button>
        ))}
      </div>

      {result === false && (
        <div className="p-2 text-2xl text-center text-white bg-red-500">
          Wrong Answer
        </div>
      )}
      {result === true && (
        <div className="p-2 text-2xl text-center text-white bg-green-500">
          Correct Answer
        </div>
      )}
    </div>
  );
};

export default HexGuesser;
