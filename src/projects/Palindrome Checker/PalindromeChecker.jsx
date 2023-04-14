import { useState } from "react";

const PalindromeChecker = () => {
  const [text, setText] = useState("");
  const [reversedText, setReversedText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(undefined);

  const changeHandler = (e) => {
    let val = e.target.value;
    var filteredInput = val.toLowerCase().replace(/[^A-Z0-9]/gi, "");
    setText(filteredInput);
  };

  const checkPalindrome = () => {
    setReversedText(text.split("").reverse().join(""));
    if (reversedText !== text) {
      setIsPalindrome(false);
    } else {
      setIsPalindrome(true);
    }
  };

  const renderResult = (text) => {
    if (text !== "") {
      if (isPalindrome) {
        return (
          <p className="text-[19px] text-center mb-[18px]">
            Yes, <span className="text-[#aa57cc]">'{text}'</span> is a
            palindrome!
          </p>
        );
      } else if (isPalindrome === false) {
        return (
          <p className="text-[19px] text-center mb-[18px]">
            No, <span className="text-[#aa57cc]">'{text}'</span> is not a
            palindrome!
          </p>
        );
      }
    }
  };

  return (
    <div className="font-['Poppins'] bg-[#aa57cc] flex items-center justify-center h-screen">
      <div className="bg-white max-w-[350px] md:max-w-[500px] rounded-[7px] p-[20px_25px_15px]">
        <header>
          <h1 className="text-[27px] font-medium">Palindrome Checker</h1>
          <p className="mt-[5px] text-[18px] text-[#474747]">
            A palindrome is a word or phrase that reads the sae backwards as
            forwards, e.g. level, refer.
          </p>
        </header>
        <div className="m-[20px_0_27px]">
          <input
            className="w-full h-[60px] outline-none border border-[#999] rounded-[5px] text-[19px] p-[0_17px] focus:shadow-[0_3px_6px_rgba(0,0,0,0.15)]"
            type="text"
            placeholder="Enter text or number"
            value={text}
            onChange={changeHandler}
          />
          <button
            className={`w-full h-[60px] outline-none border-none mt-[20px] text-[17px] bg-[#aa57cc] text-white rounded-[5px] ${
              text === "" ? "opacity-70 pointer-events-none" : ""
            }`}
            onClick={checkPalindrome}
          >
            Check Palindrome
          </button>
        </div>
        {renderResult(text)}
      </div>
    </div>
  );
};

export default PalindromeChecker;
