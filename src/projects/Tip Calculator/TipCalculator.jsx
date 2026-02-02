import { useState, useEffect } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("10%");
  const [split, setSplit] = useState(1);
  const [total, setTotal] = useState(0);

  const handleTipChange = (e) => {
    let value = e.target.value.replace("%", "");
    if (value.indexOf("%") === -1) {
      value += "%";
    }
    setTip(value);
  };

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const splitSubtract = () =>
    setSplit((prevSplit) => {
      Math.max(prevSplit - 1, 1);
    });

  const splitAdd = () => {
    setSplit((prevSplit) => prevSplit + 1);
  };

  useEffect(() => {
    const calculate = () => {
      const percentage = 1 + parseInt(tip.replace("%", "")) / 100;
      const result = ((bill * percentage) / split).toFixed(2);
      setTotal(result);
    };
    calculate();
  }, [bill, tip, split]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#012] text-white">
      <div className="flex flex-col justify-start">
        <label className="block text-sm leading-3 uppercase text-white/70">
          Bill Total
        </label>
        <input
          type="text"
          placeholder="0.00"
          className="mb-3 text-2xl text-white bg-transparent border-none outline-none placeholder:text-gray-600"
          value={bill}
          onChange={handleBillChange}
        />
        <label className="block text-sm leading-3 uppercase text-white/70">
          Tip
        </label>
        <input
          type="text"
          placeholder="0.00"
          className="mb-3 text-2xl text-white bg-transparent border-none outline-none placeholder:text-gray-600"
          value={tip}
          onChange={handleTipChange}
        />

        <div className="bg-[#158] p-3 rounded-xl flex items-center justify-between text-3xl">
          <div className="split">
            <label className="block text-base leading-6 uppercase text-white/70">
              Split
            </label>
            <div className="flex items-center justify-center split-control">
              <button
                onClick={splitSubtract}
                className="bg-[#38d] rounded-full w-8 text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={split === 1}
              >
                -
              </button>
              <span className="block px-1 py-0">{split}</span>
              <button
                onClick={splitAdd}
                className="bg-[#38d] rounded-full w-8 text-white"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block text-base leading-6 uppercase text-white/70">
              Split Total
            </label>
            <span className="text-right">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
