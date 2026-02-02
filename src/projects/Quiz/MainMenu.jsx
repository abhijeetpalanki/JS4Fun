const MainMenu = ({ setGameState }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <button
        className="w-75 h-12.5 m-1.25 border-0 rounded-[5px] text-[20px] bg-white text-black cursor-pointer"
        onClick={() => setGameState("quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
