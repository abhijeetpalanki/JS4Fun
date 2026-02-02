const SkeletonElement = ({ type, theme }) => {
  return (
    <div
      className={`my-[10px] rounded-[4px] ${
        theme === "dark" ? "bg-[#777]" : "bg-[#ddd]"
      } ${
        type === "text"
          ? "w-full h-[12px]"
          : type === "title"
          ? "w-1/2 h-[20px] mb-[15px]"
          : type === "avatar"
          ? "w-[100px] h-[100px] rounded-full"
          : type === "thumbnail" && "w-[100px] h-[100px]"
      }`}
    ></div>
  );
};

export default SkeletonElement;
