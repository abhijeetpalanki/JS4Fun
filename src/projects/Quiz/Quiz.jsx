import { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu";
import QuizComp from "./components/QuizComp";
import EndScreen from "./components/EndScreen";

const Quiz = () => {
  const [gameState, setGameState] = useState("menu");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const getQuizData = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
    );
    await res.json().then((data) => {
      let formattedQuestions = [];

      data.results.forEach((loadedQuestion) => {
        const formattedQuestion = {
          question: loadedQuestion.question,
        };

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        answerChoices.splice(
          formattedQuestion.answer - 1,
          0,
          loadedQuestion.correct_answer
        );

        answerChoices.forEach((choice, index) => {
          formattedQuestion["choice" + (index + 1)] = choice;
        });
        formattedQuestions.push(formattedQuestion);
      });

      setQuestions(formattedQuestions);
    });
  };

  useEffect(() => {
    getQuizData();
  }, []);

  return (
    <div className="quiz-body bg-black font-['Poppins'] flex flex-col items-center justify-center h-screen m-0">
      {gameState === "menu" && <MainMenu setGameState={setGameState} />}
      {gameState === "quiz" && (
        <QuizComp
          setGameState={setGameState}
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          score={score}
          setScore={setScore}
        />
      )}
      {gameState === "endScreen" && (
        <EndScreen
          setGameState={setGameState}
          questions={questions}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
};

export default Quiz;
