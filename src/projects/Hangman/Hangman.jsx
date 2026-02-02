import { useState, useEffect } from "react";
import { alphabets } from "./alphabets";
import { generate } from "random-words";
import Progress from "./Progress";

const Hangman = () => {
  const [word, setWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [status, setStatus] = useState("");

  const randomizeWord = () => {
    const words = new Array(200).fill(null).map(() => generate());
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
  };

  const onGuess = (letter) => {
    if (word.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
    } else {
      setWrongLetters([...wrongLetters, letter]);
    }
  };

  const reset = () => {
    setWord(randomizeWord());
    setCorrectLetters([]);
    setWrongLetters([]);
    setStatus("");
  };

  useEffect(() => {
    if (
      correctLetters.length &&
      word.split("").every((letter) => correctLetters.includes(letter))
    )
      setStatus("win");
  }, [correctLetters, word]);

  useEffect(() => {
    if (wrongLetters.length === 10) setStatus("lost");
  }, [wrongLetters]);

  useEffect(() => {
    setWord(randomizeWord());
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-screen text-center bg-pink-300">
      <div>
        <p className="mb-0 md:mb-[30px] text-[3em] text-[#870849] tracking-widest">
          {word
            .split("")
            .map((letter) => (correctLetters.includes(letter) ? letter : "_"))
            .join(" ")}
        </p>
        <div className="my-0 md:my-[30px] w-[300px] md:w-[600px]">
          {alphabets.map((letter, index) => (
            <button
              onClick={() => onGuess(letter)}
              disabled={
                correctLetters.includes(letter) || wrongLetters.includes(letter)
              }
              key={index}
              className="text-[#951e5a] bg-none border-2 border-white leading-none m-[0.5em] py-[1em] px-[2em] hover:border-[#ef8f6e] disabled:opacity-30 disabled:animate-none disabled:border-gray-500 disabled:cursor-not-allowed"
            >
              {letter}
            </button>
          ))}
        </div>
        <Progress count={wrongLetters.length} />

        {!status ? null : (
          <div className="absolute top-[75%] md:top-[60%] right-[60%] bg-[#aa477a64] flex flex-col justify-evenly items-center">
            <p className="m-[10px]">You {status}!</p>
            <p className="m-[10px]">
              The word was{" "}
              <span className="font-bold tracking-widest text-white">
                {word}
              </span>
            </p>
            <button
              className="text-white bg-none border-2 border-white leading-none m-[0.5em] py-[1em] px-[2em] hover:border-[#ef8f6e]"
              onClick={reset}
            >
              Play again?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hangman;
