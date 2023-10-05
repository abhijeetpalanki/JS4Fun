const MainMenu = ({ setGameState }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <button
        className="w-[300px] h-[50px] m-[5px] border-0 rounded-[5px] text-[20px] bg-white text-black"
        onClick={() => setGameState("quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
