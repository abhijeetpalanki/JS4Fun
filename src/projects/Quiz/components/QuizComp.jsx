import { useState } from "react";

const QuizComp = ({
  setGameState,
  questions,
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
}) => {
  const [chosenOption, setChosenOption] = useState(0);

  const nextQuestion = () => {
    if (questions[currentQuestion].answer === chosenOption) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (questions[currentQuestion].answer === chosenOption) {
      setScore(score + 1);
    }

    setGameState("endScreen");
  };

  return (
    <div className="main w-[500px] h-[500px] rounded-[10px] bg-[lightseagreen] text-white flex items-center justify-center flex-col">
      <h1 className="m-[10px] p-[20px]">
        {questions[currentQuestion].question}
      </h1>
      <div className="flex flex-col items-center justify-center w-full options">
        <button
          className="w-[300px] h-[50px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black focus:bg-black focus:text-white"
          onClick={() => setChosenOption(1)}
        >
          {questions[currentQuestion].choice1}
        </button>
        <button
          className="w-[300px] h-[50px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black focus:bg-black focus:text-white"
          onClick={() => setChosenOption(2)}
        >
          {questions[currentQuestion].choice2}
        </button>
        <button
          className="w-[300px] h-[50px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black focus:bg-black focus:text-white"
          onClick={() => setChosenOption(3)}
        >
          {questions[currentQuestion].choice3}
        </button>
        <button
          className="w-[300px] h-[50px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black focus:bg-black focus:text-white"
          onClick={() => setChosenOption(4)}
        >
          {questions[currentQuestion].choice4}
        </button>
      </div>

      {currentQuestion === questions.length - 1 ? (
        <button
          onClick={finishQuiz}
          className="block w-full h-[50px] m-[5px] border-0 text-[20px] bg-white text-black focus:bg-black focus:text-white"
        >
          Finish Quiz
        </button>
      ) : (
        <button
          onClick={nextQuestion}
          className="block w-full h-[50px] m-[5px] border-0 text-[20px] bg-white text-black focus:bg-black focus:text-white"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuizComp;
