import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = ({ theme }) => {
  return (
    <div
      className={`my-5 mx-auto py-[10px] px-[15px] rounded-[4px] animate-pulse ${
        theme === "dark" ? "bg-[#444]" : "bg-[#f2f2f2]"
      }`}
    >
      <div className="article">
        <SkeletonElement type="title" theme={theme} />
        <SkeletonElement type="text" theme={theme} />
        <SkeletonElement type="text" theme={theme} />
      </div>
    </div>
  );
};

export default SkeletonArticle;
