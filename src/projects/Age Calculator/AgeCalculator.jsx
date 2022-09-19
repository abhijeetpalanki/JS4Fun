import React, { useState } from "react";

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const AgeCalculator = () => {
  const [inputDate, setInputDate] = useState("");
  const [birthMonth, setBirthMonth] = useState("0");
  const [birthDate, setBirthDate] = useState("0");
  const [birthYear, setBirthYear] = useState("0");

  const calculateAge = () => {
    let today = new Date();
    let birthDetails = {
      date: new Date(inputDate).getDate(),
      month: new Date(inputDate).getMonth() + 1,
      year: new Date(inputDate).getFullYear(),
    };
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();

    leapYearChecker(currentYear);

    if (
      birthDetails.year > currentYear ||
      (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
      (birthDetails.date > currentDate &&
        birthDetails.month == currentMonth &&
        birthDetails.year == currentYear)
    ) {
      alert("Not Born Yet!");
      setInputDate("");
      setBirthDate("0");
      setBirthMonth("0");
      setBirthYear("0");
      return;
    }

    setBirthYear(currentYear - birthDetails.year);

    if (currentMonth >= birthDetails.month) {
      setBirthMonth(currentMonth - birthDetails.month);
    } else {
      setBirthYear((birthYear) => birthYear - 1);
      setBirthMonth(12 + currentMonth - birthDetails.month);
    }

    if (currentDate >= birthDetails.date) {
      setBirthDate(currentDate - birthDetails.date);
    } else {
      setBirthMonth((birthMonth) => birthMonth - 1);
      let days = months[currentMonth - 2];
      setBirthDate(days + currentDate - birthDetails.date);
      if (birthMonth < 0) {
        setBirthMonth(11);
        setBirthYear((birthYear) => birthYear - 1);
      }
    }
  };

  const leapYearChecker = (year) => {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
      months[1] = 29;
    } else {
      months[1] = 28;
    }
  };

  return (
    <div className="h-screen bg-[#0a6cf1] font-['Poppins'] flex justify-center items-center">
      <div className="w-[40%] min-w-[450px] py-[50px] px-[30px]">
        {/* Inputs Wrapper */}
        <div className="bg-[#080808] py-[30px] px-[25px] rounded-[8px] shadow-[0_15px_20px_rgba(0,0,0,0.3)] border-none outline-none mb-[50px]">
          <input
            type="date"
            className="h-[50px] bg-white text-[#080808] font-[500] rounded-[5px] w-[60%] py-0 px-[20px] text-[14px]"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button
            className="h-[50px] bg-white text-[#080808] font-[500] rounded-[5px] w-[30%] float-right"
            onClick={calculateAge}
          >
            Calculate
          </button>
        </div>

        {/* Output Wrapper */}
        <div className="flex justify-between w-full">
          <div className="h-[100px] w-[100px] bg-[#080808] rounded-[5px] text-white grid place-items-center py-[20px] px-0 shadow-[0_15px_20px_rgba(0,0,0,0.3)]">
            <span className="text-[30px] font-[500]">{birthYear}</span>
            <p className="text-[14px] text-[#707070] font-[400]">Years</p>
          </div>
          <div className="h-[100px] w-[100px] bg-[#080808] rounded-[5px] text-white grid place-items-center py-[20px] px-0 shadow-[0_15px_20px_rgba(0,0,0,0.3)]">
            <span className="text-[30px] font-[500]">{birthMonth}</span>
            <p className="text-[14px] text-[#707070] font-[400]">Months</p>
          </div>
          <div className="h-[100px] w-[100px] bg-[#080808] rounded-[5px] text-white grid place-items-center py-[20px] px-0 shadow-[0_15px_20px_rgba(0,0,0,0.3)]">
            <span className="text-[30px] font-[500]">{birthDate}</span>
            <p className="text-[14px] text-[#707070] font-[400]">Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
