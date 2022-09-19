import React from "react";
import MainMenu from "./components/MainMenu";
import QuizComp from "./components/QuizComp";
import EndScreen from "./components/EndScreen";
import { useProjectsContext } from "../../context/ProjectsContextProvider";

const Quiz = () => {
  const { gameState } = useProjectsContext();

  return (
    <div className="quiz-body bg-[#b8c6db] bg-gradient-to-r from-[#b8c6db] to-[#f5f7fa] font-['Poppins'] flex flex-col items-center justify-center h-screen m-0">
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <QuizComp />}
      {gameState === "endScreen" && <EndScreen />}
    </div>
  );
};

export default Quiz;
