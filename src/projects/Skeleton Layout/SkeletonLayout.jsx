import React from "react";
import Articles from "./Articles";
import User from "./User";

const SkeletonLayout = () => {
  return (
    <div className="h-screen text-black bg-white">
      <header className="bg-[#1e65ff] p-[10px]">
        <h1 className="mx-auto text-white max-w-7xl">Skeleton Layout</h1>
      </header>
      <div className="w-full max-w-7xl mx-auto p-5 grid grid-cols-[2fr_1fr] gap-[100px]">
        <Articles />
        <User />
      </div>
    </div>
  );
};

export default SkeletonLayout;
