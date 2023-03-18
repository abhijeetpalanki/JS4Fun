const MainMenu = ({ setGameState }) => {
  return (
    <div className="menu w-[500px] h-[500px] rounded-[10px] bg-[lightseagreen] text-white flex items-center justify-center flex-col">
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
