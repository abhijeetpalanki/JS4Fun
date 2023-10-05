import { useState } from "react";

const SimpleInterestCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [result, setResult] = useState(null);

  const calcSum = (e) => {
    e.preventDefault();

    if (num1 === 0 || num2 === 0 || num3 === 0) {
      alert("please enter a valid weight and height");
    } else {
      let amount = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
      setResult(parseInt(amount));
    }
  };

  return (
    <div className="bg-[#0e0e0e] flex justify-center items-center text-center h-screen">
      <div className="shadow-[0_0_12px_#ffffff] bg-[#faf9fa] w-[300px] md:w-[519px] h-[672px] rounded-lg p-12">
        <div className="text-[20px] font-normal">
          <h1 className="text-xl md:text-3xl">Simple Interest Calculator</h1>
          <p className="text-sm md:text-xl pt-[5px]">
            Calculate your simple interest easily.
          </p>
        </div>
        <div className="w-[200px] md:w-[445px] h-[138px] bg-[#d6ff58] mt-[22px] rounded-lg">
          <div className="pt-10">
            <h3 className="flex flex-col items-center justify-center text-3xl font-extrabold">
              $ {result}
            </h3>
            <p className="text-center text-xs pt-[5px] text-[#4b4b4b]">
              Total simple interest
            </p>
          </div>
        </div>
        <form onSubmit={calcSum}>
          <div className="mt-10">
            <div className="mt-8 w-[445px]">
              <input
                type="number"
                value={num1 || ""}
                onChange={(e) => setNum1(e.target.value)}
                className="border text-sm rounded-lg block w-[200px] md:w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="$ Principal amount"
              />
            </div>
            <div className="mt-8 w-[445px]">
              <input
                type="number"
                value={num2 || ""}
                onChange={(e) => setNum2(e.target.value)}
                className="border text-sm rounded-lg block w-[200px] md:w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rate of interest (p.a) %"
              />
            </div>
            <div className="mt-8 w-[445px]">
              <input
                type="number"
                value={num3 || ""}
                onChange={(e) => setNum3(e.target.value)}
                className="border text-sm rounded-lg block w-[200px] md:w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Time period ( Yr )"
              />
            </div>
          </div>
          <div className="mt-[20px] md:mt-[61px] mb-4">
            <div className="flex flex-row gap-2">
              <button
                type="submit"
                className="bg-[#1f1f1f] w-[200px] h-[75px] text-white rounded-lg"
                style={{ backgroundColor: "black" }}
              >
                Calculate
              </button>
              <button
                className="bg-[#1f1f1f] w-[200px] h-[75px] text-white rounded-lg"
                onClick={() => {
                  setResult(0);
                  window.location.reload();
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
