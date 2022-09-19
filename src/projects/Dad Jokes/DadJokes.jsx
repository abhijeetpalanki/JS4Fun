import React from "react";
import { useProjectsContext } from "../../context/ProjectsContextProvider";
import "./DadJokes.css";

const DadJokes = () => {
  const { jokeObj, generateJoke } = useProjectsContext();

  return (
    <div className="dad-jokes-body bg-[#686de0] font-['Roboto'] flex justify-center items-center h-screen overflow-hidden m-0 p-5">
      <div className="container bg-white flex justify-center items-center flex-col rounded-[10px] py-[50px] px-[20px] text-center max-w-full w-[800px]">
        <h3 className="m-0 opacity-50 tracking-[2px]">Don't Laugh Challenge</h3>
        <div
          id="joke"
          className="joke text-[30px] tracking-[1px] leading-[40px] my-[50px] mx-auto max-w-[600px]"
        >
          {jokeObj}
        </div>
        <button
          id="joke-btn"
          className="btn bg-[#9f68e0] text-white border-0 rounded-[10px] py-[14px] px-[40px] text-[16px]"
          onClick={generateJoke}
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
