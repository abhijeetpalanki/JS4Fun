import { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [comment, setComment] = useState("");

  const calc = (e) => {
    e.preventDefault();

    if (height === 0 || weight === 0) {
      alert("Please enter a valid height and weight");
    } else {
      setBmi(((weight / (height * height)) * 703).toFixed(1));

      if (bmi < 25) {
        setComment("underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setComment("healthy");
      } else {
        setComment("overweight");
      }
    }
  };

  return (
    <div className="font-['Nunito'] bg-bmiCalculatorBg bg-cover h-screen flex justify-center items-center overflow-hidden m-0">
      <div className="flex justify-center items-center">
        <div className="min-w-[400px] bg-[#fafafa] rounded-[38px] text-center relative z-10 box">
          <h1 className="font-bold text-4xl py-[30px] px-0">BMI Calculator</h1>
          <form onSubmit={calc} className="py-0 px-[40px]">
            <div className="bg-white shadow-[0px_0px_95px_-30px_rgba(0,0,0,0.15)] rounded-[28px] py-[20px] px-0 mb-[20px]">
              <label className="block text-lg font-semibold text-black mb-[20px]">
                Height (in)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="outline-none border-b border-b-[#4f7df9] w-[60%] text-center text-[28px]"
              />
            </div>
            <div className="bg-white shadow-[0px_0px_95px_-30px_rgba(0,0,0,0.15)] rounded-[28px] py-[20px] px-0 mb-[20px]">
              <label className="block text-lg font-semibold text-black mb-[20px]">
                Weight (lbs)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="outline-none border-b border-b-[#4f7df9] w-[60%] text-center text-[28px]"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#4f7df9] text-base rounded-xl py-[12px] px-0 w-full outline-none border-none hover:bg-[#0044ff] hover:transition-[background] hover:duration-200 hover:ease-in-out"
            >
              Calculate
            </button>
          </form>

          <div className="py-[30px] px-[20px]">
            <p className="font-semibold text-[22px] text-black mb-[15px]">
              Your BMI is:
            </p>
            <div className="text-[36px] font-black text-[#4f7df9] bg-[#eaeaea] inline-block py-[7px] px-[20px] rounded-[55px] mb-[25px]">
              {bmi}
            </div>
            <p>
              Comment: You are{" "}
              <span className="text-[#4f7df9] font-extrabold">{comment}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
