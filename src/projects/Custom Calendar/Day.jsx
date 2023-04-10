import React from "react";

const Day = ({ day, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[100px] p-[10px] h-[100px] box-border m-[5px] flex flex-col justify-between ${
        day.value === "padding"
          ? "cursor-default bg-[#fffcff] shadow-none"
          : "cursor-pointer bg-white shadow-[0_0_3px_#cbd4c2] hover:bg-[#e8faed]"
      } ${day.isCurrentDay ? "bg-[#e8f4fa]" : ""}`}
    >
      {day.value === "padding" ? "" : day.value}

      {day.event && (
        <div className="text-[10px] p-[3px] bg-[#58bae4] text-white rounded-[5px] max-h-[55px] overflow-hidden">
          {day.event.title}
        </div>
      )}
    </div>
  );
};

export default Day;
