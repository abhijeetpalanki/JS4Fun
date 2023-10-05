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
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="m-[10px] p-[20px] text-center text-black text-2xl">
        {questions[currentQuestion].question}
      </h1>
      <div className="flex flex-col items-center justify-center w-full options">
        <button
          className="w-[300px] h-[70px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black"
          onClick={() => {
            setChosenOption(1);
            currentQuestion === questions.length - 1
              ? finishQuiz()
              : nextQuestion();
          }}
        >
          {questions[currentQuestion].choice1}
        </button>
        <button
          className="w-[300px] h-[70px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black"
          onClick={() => {
            setChosenOption(2);
            currentQuestion === questions.length - 1
              ? finishQuiz()
              : nextQuestion();
          }}
        >
          {questions[currentQuestion].choice2}
        </button>
        <button
          className="w-[300px] h-[70px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black"
          onClick={() => {
            setChosenOption(3);
            currentQuestion === questions.length - 1
              ? finishQuiz()
              : nextQuestion();
          }}
        >
          {questions[currentQuestion].choice3}
        </button>
        <button
          className="w-[300px] h-[70px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black"
          onClick={() => {
            setChosenOption(4);
            currentQuestion === questions.length - 1
              ? finishQuiz()
              : nextQuestion();
          }}
        >
          {questions[currentQuestion].choice4}
        </button>
      </div>
    </div>
  );
};

export default QuizComp;
