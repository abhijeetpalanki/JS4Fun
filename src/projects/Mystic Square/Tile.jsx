const Tile = ({ number, moveTile }) => (
  <div
    onClick={() => moveTile(number)}
    className={`absolute w-[100px] h-[100px] flex items-center justify-center  cursor-pointer transition-[left,top] duration-[400ms] ${
      number.value === number.index + 1 ? "bg-[#6e50b4]" : ""
    } ${
      number.value === 16
        ? "pointer-events-none bg-transparent"
        : "bg-[#342956] text-[50px] text-white"
    } slot-${number.index}`}
  >
    {number.value === 16 ? "" : number.value}
  </div>
);

export default Tile;
