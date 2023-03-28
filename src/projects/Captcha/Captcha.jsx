import { useState } from "react";
import CaptchaTextGenerator from "captcha-text-generator";

const Captcha = () => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");

  const submitCaptcha = () => {
    if (userInput === captchaText) {
      alert("success");
      setUserInput("");
    } else {
      alert("failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-captchaGradient">
      <div className="w-[512px] bg-white p-20 rounded-md shadow-[0_1em_2em_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center justify-center my-4 mx-0">
          <h3 className="font-light text-sm text-gray-600 mb-5">
            Reload page to generate another Captcha
          </h3>
          <CaptchaTextGenerator
            result={(res) => setCaptchaText(res)}
            textColor="#8052ec"
            fontFamily="Roboto Mono"
          />
        </div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter the text in the image..."
          className="font-['Roboto_Mono'] text-[1.05em] w-full py-[1em] px-[0.7em] border border-black rounded-md"
        />
        <button
          onClick={submitCaptcha}
          className="w-full bg-[#8052ec] text-white text-[1.5em] border-none mt-[1em] py-[0.8em] px-0 rounded-md font-['Roboto_Mono']"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Captcha;