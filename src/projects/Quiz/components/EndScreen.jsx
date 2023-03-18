const EndScreen = ({ setGameState, questions, score, setScore }) => {
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="end-screen w-[500px] h-[500px] rounded-[10px] bg-[lightseagreen] text-white flex items-center justify-center flex-col">
      <h1 className="text-[2rem] font-bold">Congratulations!!!</h1>
      <h3 className="text-[1rem] font-bold">
        You answered correctly at {score}/{questions.length} questions correctly
      </h3>
      <button
        className="w-[300px] h-[50px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black"
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
