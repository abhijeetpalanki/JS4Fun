const Focus = () => {
  return (
    <div className="[background-image:linear-gradient(45deg,#ff0057,#2196f3)] font-mono flex flex-col items-center justify-center h-screen">
      <h2 className="relative flex gap-[5px] text-white text-[4em] md:text-[8em] cursor-pointer">
        <span className="relative blur-[10px] hover:blur-0 duration-500 hover:duration-[0] py-0 px-[5px]">
          <i className="absolute inset-0"></i>F
        </span>
        <span className="relative blur-[10px] hover:blur-0 duration-500 hover:duration-[0] py-0 px-[5px]">
          <i className="absolute inset-0"></i>O
        </span>
        <span className="relative blur-[10px] hover:blur-0 duration-500 hover:duration-[0] py-0 px-[5px]">
          <i className="absolute inset-0"></i>C
        </span>
        <span className="relative blur-[10px] hover:blur-0 duration-500 hover:duration-[0] py-0 px-[5px]">
          <i className="absolute inset-0"></i>U
        </span>
        <span className="relative blur-[10px] hover:blur-0 duration-500 hover:duration-[0] py-0 px-[5px]">
          <i className="absolute inset-0"></i>S
        </span>
      </h2>
    </div>
  );
};

export default Focus;
