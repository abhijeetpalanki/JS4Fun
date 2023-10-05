import { useEffect, useState } from "react";
import axios from "axios";

const WordAssociations = () => {
  const [chosenLevel, setChosenLevel] = useState("0");
  const [words, setWords] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);

  const getRandomWords = () => {
    const options = {
      method: "GET",
      url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
      params: { level: "3", area: "overall" },
      headers: {
        "X-RapidAPI-Key": "c1902cf42cmshb768e95a639ba02p112337jsn890a346b43de",
        "X-RapidAPI-Host": "twinword-word-association-quiz.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setWords(response.data.quizlist);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const checkAnswer = (option, index, correct) => {
    if (index === correct) {
      setCorrectAnswers([...correctAnswers, option]);
      setScore((score) => score + 1);
    } else {
      setScore((score) => score - 1);
    }

    setClicked([...clicked, option]);
  };

  useEffect(() => {
    if (chosenLevel !== "0") getRandomWords();
  }, [chosenLevel]);

  return (
    <div className="flex flex-col items-center justify-center h-full tracking-widest md:h-screen">
      {chosenLevel === "0" ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] font-bold">Word Associations</h1>
          <p className="text-[16px] font-bold text-gray-700">
            Select your level to start
          </p>
          <select
            name="levels"
            id="levels"
            value={chosenLevel}
            onChange={(e) => setChosenLevel(e.target.value)}
            className="m-[5px] p-[8px] rounded-[5px] border-none bg-white"
          >
            <option value="0">Select a Level</option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
          </select>
        </div>
      ) : (
        words && (
          <>
            <h1 className="text-[32px] font-bold">
              Welcome to level: {chosenLevel}
            </h1>
            <h3 className="text-[20px] font-bold">Your score is: {score}</h3>

            <div className="max-w-[1000px] flex flex-row flex-wrap justify-center items-center">
              {words.map(({ quiz, option, correct }, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="question-box bg-[antiquewhite] p-[10px] rounded-[20px] m-[10px] text-center">
                    {quiz.map((tip, t_index) => (
                      <p key={t_index}>{tip}</p>
                    ))}
                    <div className="flex flex-row">
                      {option.map((option, o_index) => (
                        <div key={o_index}>
                          <button
                            disabled={clicked.includes(option)}
                            onClick={() =>
                              checkAnswer(option, o_index + 1, correct)
                            }
                            className="m-[5px] p-[8px] rounded-[5px] border-0 bg-black text-white disabled:bg-[darkgrey] disabled:text-[darkolivegreen]"
                          >
                            {option}
                          </button>
                          {correctAnswers.includes(option) && <p>Correct!</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="m-[5px] p-[8px] rounded-[5px] border-0 bg-black text-white disabled:bg-[darkgrey] disabled:text-[darkolivegreen]"
              onClick={() => setChosenLevel("0")}
            >
              Go Back
            </button>
          </>
        )
      )}
    </div>
  );
};

export default WordAssociations;
