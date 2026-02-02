import SkeletonElement from "./SkeletonElement";

const SkeletonUser = ({ theme }) => {
  return (
    <div
      className={`my-5 mx-auto py-[10px] px-[15px] rounded-[4px] animate-pulse ${
        theme === "dark" ? "bg-[#444]" : "bg-[#f2f2f2]"
      }`}
    >
      <div className="grid grid-cols-[1fr_2fr] gap-[30px] items-center">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonUser;
