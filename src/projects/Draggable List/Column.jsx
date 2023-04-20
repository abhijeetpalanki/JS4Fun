const Column = ({ isOver, children }) => {
  return (
    <div
      className={`min-h-[300px] max-w-[300px] w-[300px] ${
        isOver ? "bg-yellow-300" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Column;
