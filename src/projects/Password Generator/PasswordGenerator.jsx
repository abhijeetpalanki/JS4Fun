import React, { useRef, useState } from "react";
import "./PasswordGenerator.css";
import { FaClipboard } from "react-icons/fa";

const PasswordGenerator = () => {
  const [length, setLength] = useState(20);
  const resultEl = useRef(null);
  const lengthEl = useRef(null);
  const uppercaseEl = useRef(null);
  const lowercaseEl = useRef(null);
  const numbersEl = useRef(null);
  const symbolsEl = useRef(null);
  const toastsEl = useRef(null);

  const generatePassword = () => {
    const length = +lengthEl.current.value;
    const hasLower = lowercaseEl.current.checked;
    const hasUpper = uppercaseEl.current.checked;
    const hasNumber = numbersEl.current.checked;
    const hasSymbol = symbolsEl.current.checked;

    resultEl.current.innerText = getPassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      length
    );
  };

  const getPassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      return "";
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
  };

  const copyPassword = () => {
    const textarea = document.createElement("textarea");
    const password = resultEl.current.innerText;

    if (!password) {
      return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    // toast notification
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = "Password copied to clipboard!";
    toastsEl.current.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 3000);
  };

  const handleChange = (event) => {
    setLength(event.target.value);
  };

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  return (
    <div className="password-generator-body bg-[#3b3b98] text-white font-['Muli'] flex items-center justify-center h-screen overflow-hidden m-0 p-[10px]">
      <div className="container flex flex-col items-center justify-center bg-[#23235b] p-[20px] w-[350px] max-w-full">
        <h2 className="text-[32px] text-center mx-0 mt-[10px] mb-[20px]">
          Password Generator
        </h2>
        <div className="result-container bg-black/40 flex justify-start items-center relative text-[18px] tracking-[1px] py-[12px] px-[10px] h-[50px] w-full">
          <span ref={resultEl}></span>
          <button className="btn" onClick={copyPassword}>
            <FaClipboard />
          </button>
        </div>
        <div className="w-full settings">
          <div className="setting">
            <label>Password Length</label>
            <input
              type="number"
              ref={lengthEl}
              min={4}
              max={20}
              value={length}
              onChange={handleChange}
            />
          </div>
          <div className="setting">
            <label>Include Uppercase Letters</label>
            <input type="checkbox" ref={uppercaseEl} defaultChecked />
          </div>
          <div className="setting">
            <label>Include Lowercase Letters</label>
            <input type="checkbox" ref={lowercaseEl} defaultChecked />
          </div>
          <div className="setting">
            <label>Include Numbers</label>
            <input type="checkbox" ref={numbersEl} defaultChecked />
          </div>
          <div className="setting">
            <label>Include Symbols</label>
            <input type="checkbox" ref={symbolsEl} defaultChecked />
          </div>
        </div>

        <button className="btn btn-large" onClick={generatePassword}>
          Generate Password
        </button>
      </div>

      <div
        id="toasts"
        className="fixed right-[20px] bottom-[20px]"
        ref={toastsEl}
      ></div>
    </div>
  );
};

export default PasswordGenerator;
