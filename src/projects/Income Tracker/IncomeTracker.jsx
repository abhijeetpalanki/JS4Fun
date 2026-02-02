import { useState, useEffect, useRef } from "react";
import IncomeItem from "./IncomeItem";

const IncomeTracker = () => {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const priceRef = useRef(null);

  const addIncome = (e) => {
    e.preventDefault();

    let d = dateRef.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        date: newD.getTime(),
      },
    ]);

    descriptionRef.current.value = "";
    priceRef.current.value = null;
    dateRef.current.value = null;
  };

  const removeIncome = (i) => {
    let temp = income.filter((v, index) => index !== i);
    setIncome(temp);
  };

  const sortByDate = (a, b) => a.date - b.date;

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="p-7.5 h-screen bg-[#f8f8f8]">
      <header className="flex flex-col md:flex-row justify-between p-3.75">
        <h1 className="text-[#888] text-[32px] font-semibold text-left">
          Income Tracker
        </h1>
        <div className="text-[#888] text-[28px] font-black bg-[#dfdfdf] py-1.25 px-6.25 rounded-lg">
          ${totalIncome}
        </div>
      </header>

      <form
        onSubmit={addIncome}
        className="inline-flex md:block m-3.75 relative after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-0 after:bg-linear-to-r after:from-[#ffce00] after:to-[#fe4880] after:rounded-[10px] after:duration-200 focus-within:after:-top-0.75 focus-within:after:-left-0.75 focus-within:after:-right-0.75 focus-within:after:-bottom-0.75"
      >
        <div className="relative z-1 flex flex-col md:flex-row justify-center duration-400 rounded-lg">
          <input
            ref={descriptionRef}
            type="text"
            className="outline-none border-none text-[18px] py-2.5 px-3.75 bg-white rounded-[8px_0_0_8px] flex-[1_1_100%]"
            name="desc"
            id="desc"
            placeholder="Income Description..."
          />
          <input
            ref={priceRef}
            type="number"
            className="outline-none border-none text-[18px] py-2.5 px-3.75 bg-white rounded-none min-w-50"
            name="price"
            id="price"
            placeholder="Price"
          />
          <input
            ref={dateRef}
            type="date"
            className="outline-none border-none text-[18px] py-2.5 px-3.75 bg-white"
            name="date"
            id="date"
            placeholder="Income Date..."
          />
          <input
            type="submit"
            value="Add Income"
            className="outline-none border-none text-[18px] py-2.5 px-3.75 bg-white rounded-[0_8px_8px_0] cursor-pointer bg-linear-to-r from-[#ffce00] from-50% via-[#ffce00] via-50% to-[#fe4880] bg-size-[200%] bg-position-[0%] text-[#313131] font-semibold uppercase duration-400 hover:bg-position-[100%] hover:text-white"
          />
        </div>
      </form>

      <div className="p-3.75">
        {income.sort(sortByDate).map((value, index) => (
          <IncomeItem
            key={index}
            income={value}
            index={index}
            removeIncome={removeIncome}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeTracker;
