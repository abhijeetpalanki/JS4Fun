import { useState } from "react";
import { CaptchaText } from "captcha-text-generator";

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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-[#8052ec] to-[#d161ff]">
      <div className="w-[350px] md:w-[512px] bg-white p-20 rounded-md shadow-[0_1em_2em_#0000003f]">
        <div className="flex flex-col items-center justify-center mx-0 my-4">
          <h3 className="mb-5 text-sm font-light text-gray-600">
            Reload page to generate another Captcha
          </h3>
          <CaptchaText
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
          className="text-black text-[1.05em] w-full py-[1em] px-[0.7em] border border-black rounded-md"
        />
        <button
          onClick={submitCaptcha}
          className="w-full bg-[#8052ec] text-white text-[1.5em] border-none mt-[1em] py-[0.8em] px-0 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Captcha;
