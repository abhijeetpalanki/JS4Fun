const Column = ({ isOver, children }) => {
  return (
    <div className={`min-h-75 max-w-75 w-75 ${isOver ? "bg-yellow-300" : ""}`}>
      {children}
    </div>
  );
};

export default Column;
