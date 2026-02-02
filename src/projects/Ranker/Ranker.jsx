import { useState } from "react";
import { LeafPoll } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";

const Ranker = () => {
  const [answers, setAnswers] = useState([
    { id: 0, text: "Extremely Satisfied", votes: 0 },
    { id: 1, text: "Very Satisfied", votes: 0 },
    { id: 2, text: "Not Satisfied", votes: 0 },
    { id: 3, text: "Extremely Not Satisfied", votes: 0 },
  ]);

  const customTheme = {
    textColor: "black",
    mainColor: "#00B87B",
    backgroundColor: "white",
    alignment: "center",
  };

  const vote = (item, results) => {
    setAnswers(results);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-700 bg-gray-100 text-opacity-90">
      <div className="max-w-screen-sm px-4 py-8 mx-auto overflow-y-auto transition-all duration-200 ease-out">
        <div className="mb-3">
          <h1 className="my-12 text-2xl font-bold text-center uppercase">
            Enter Poll Details
          </h1>
        </div>

        <div>
          <LeafPoll
            type="multiple"
            question="How satisfied are you with JS4Fun?"
            results={answers}
            theme={customTheme}
            onVote={vote}
            isVoted={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Ranker;
