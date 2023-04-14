const Header = () => {
  return (
    <div className="border-[3px] border-[hsl(217,16%,45%)] w-[20rem] md:w-[43.75rem] mt-[1.875rem] rounded-2xl p-5">
      <div className="text-[1.5rem] md:text-[2.5rem] uppercase flex justify-between leading-8">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
    </div>
  );
};

export default Header;
