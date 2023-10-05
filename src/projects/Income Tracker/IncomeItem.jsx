import React from "react";

const IncomeItem = ({ income, index, removeIncome }) => {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };

  return (
    <div className="relative py-[10px] px-[15px] bg-white rounded-lg mb-[15px] flex duration-[400ms] pl-[75px] group shadow-[0_0_6px_#00000019]">
      <button
        className="absolute w-0 group-hover:w-[50px] top-0 left-0 bottom-0 overflow-hidden cursor-pointer block text-[#f8f8f8] font-semibold bg-[#ff1e2d] rounded-[8px_0_0_8px] duration-200"
        onClick={() => removeHandle(index)}
      >
        x
      </button>
      <div className="flex-[1_1_100%]">{income.description}</div>
      <div className="min-w-[125px]">${income.price}</div>
      <div className="min-w-[125px]">{month + "/" + day + "/" + year}</div>
    </div>
  );
};

export default IncomeItem;
