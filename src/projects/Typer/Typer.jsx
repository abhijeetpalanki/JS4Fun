import { useEffect, useRef, useState } from "react";
import { generate } from "random-words";
import "./Typer.css";

const NUM_OF_WORDS = 200;
const SECONDS = 60;

const Typer = () => {
  const [words, setWords] = useState([]);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SECONDS);
  const [intervalId, setIntervalId] = useState(null);
  const [cpm, setCpm] = useState(0);
  const textInputRef = useRef(null);
  const typingTextRef = useRef(null);

  const generateWords = () => {
    return new Array(NUM_OF_WORDS).fill(null).map(() => generate());
  };

  useEffect(() => {
    setWords(generateWords());
  }, []);

  useEffect(() => {
    setText(words.join(" "));
  }, [words]);

  const initTimer = () => {
    setTimeLeft((prevTimeLeft) => {
      if (prevTimeLeft === 0) {
        setTimeLeft(0);
        clearInterval(intervalId);
      } else {
        return prevTimeLeft - 1;
      }
    });
  };

  const initTyping = () => {
    const characters = document.querySelectorAll(".typer-body p span");

    typingTextRef.current
      .querySelectorAll(
        ".typer-body .wrapper .content-box .typing-text p span",
      )[0]
      .classList.add("active");
    let typedChar = textInputRef.current.value.split("")[charIndex];

    if (charIndex < characters.length - 1 && timeLeft > 0) {
      if (!isTyping) {
        setIntervalId(setInterval(initTimer, 1000));
        setIsTyping(true);
      }

      if (typedChar == null) {
        setCharIndex(charIndex - 1);

        if (characters[charIndex].classList.contains("incorrect")) {
          setMistakesCount(mistakesCount - 1);
        }

        characters[charIndex].classList.remove("correct", "incorrect");
      } else {
        if (characters[charIndex].innerText === typedChar) {
          characters[charIndex].classList.add("correct");
        } else {
          setMistakesCount(mistakesCount + 1);
          characters[charIndex].classList.add("incorrect");
        }

        setCharIndex(charIndex + 1);
      }

      characters.forEach((span) => span.classList.remove("active"));
      characters[charIndex].classList.add("active");

      setCpm(charIndex - mistakesCount);
    } else {
      textInputRef.current.value = "";
      clearInterval(intervalId);
    }
  };

  const resetGame = () => {
    setWords([]);
    setWords(generateWords());

    setTimeLeft(SECONDS);
    setCharIndex(0);
    setMistakesCount(0);
    setIsTyping(false);

    const characters = document.querySelectorAll(".typer-body p span");
    characters.forEach((ch) => {
      ch.classList.remove("correct", "incorrect", "active");
    });

    textInputRef.current.value = "";
    clearInterval(intervalId);
  };

  return (
    <div className="typer-body">
      <div className="wrapper">
        <input
          type="text"
          className="input-field"
          ref={textInputRef}
          onInput={initTyping}
        />
        <div className="content-box">
          <div
            className="typing-text"
            onClick={() => textInputRef.current.focus()}
            ref={typingTextRef}
          >
            <p>
              {text && text.split("").map((ch, i) => <span key={i}>{ch}</span>)}
            </p>
          </div>
          <div className="content">
            <ul className="result-details">
              <li className="time">
                <p>Time Left:</p>
                <span>
                  <strong>{timeLeft}</strong>s
                </span>
              </li>
              <li className="mistake">
                <p>Mistakes:</p>
                <span>{mistakesCount}</span>
              </li>
              <li className="cpm">
                <p>CPM:</p>
                <span>{cpm}</span>
              </li>
            </ul>
            <button onClick={resetGame}>Try Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typer;
