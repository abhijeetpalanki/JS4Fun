const Button = ({ title, activeClass, _callback }) => {
  return (
    <button
      className={`text-[#efefef] text-2xl py-2 px-[1.2rem] border-none rounded-[3rem] m-[0.2rem] bg-[#0c0e1b] min-w-25 ${activeClass}`}
      onClick={_callback}
    >
      {title}
    </button>
  );
};

export default Button;
