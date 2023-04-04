const Winner = ({ numbers }) => {
  if (!numbers.every((n) => n.value === n.index + 1)) return null;

  return (
    <div className="absolute bg-[#342956] rounded-[10px] top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white z-20">
      <p>You won!</p>
    </div>
  );
};

export default Winner;
