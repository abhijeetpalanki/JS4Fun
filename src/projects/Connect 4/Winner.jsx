const Winner = ({ winner, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold text-black">
        {winner === -1 ? "No Player has won." : `Player ${winner} has won.`}
      </h1>
      <button
        className={`py-4 px-2 text-white rounded-lg transition-colors duration-150 ease-out ${
          winner === 1
            ? "bg-[#3483e0] hover:bg-[#3483e0]/60"
            : "bg-[#ec0b07] hover:bg-[#ec0b07]/60"
        }`}
        onClick={reset}
      >
        Play Again
      </button>
    </div>
  );
};

export default Winner;
