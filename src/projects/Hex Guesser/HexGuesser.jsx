import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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
    <div className="h-screen flex flex-col justify-center items-center">
      <div
        className="w-[200px] h-[200px] mb-5"
        style={{ background: color }}
      ></div>

      <div className="flex justify-between mb-5">
        {answers.map((answer) => (
          <button
            onClick={() => handleAnswerClicked(answer)}
            className="p-3 text-xl bg-black text-white m-1"
            key={answer}
          >
            {answer}
          </button>
        ))}
      </div>

      {result === false && (
        <div className="bg-red-500 text-2xl text-center text-white p-2">
          Wrong Answer
        </div>
      )}
      {result === true && (
        <div className="bg-green-500 text-2xl text-center text-white p-2">
          Correct Answer
        </div>
      )}
    </div>
  );
};

export default HexGuesser;
