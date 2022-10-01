import React from "react";

const Message = ({ type }) => {
  return (
    <div
      className={`text-5xl text-center border-[2px] p-6 absolute z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${type}`}
    >
      {type === "denied" ? "Access Denied" : "Access Granted"}
    </div>
  );
};

export default Message;
