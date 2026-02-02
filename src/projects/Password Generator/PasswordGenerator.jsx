import { useRef, useState } from "react";
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
      length,
    );
  };

  const getPassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0],
    );

    if (typesCount === 0) {
      return "";
    }

    for (let i = 0; i < length; i += typesCount) {
      // eslint-disable-next-line no-loop-func
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
    notif.className = "bg-black text-white rounded-[5px] py-4 px-8 m-2";
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
    <div className="flex items-center justify-center h-screen p-3 text-white">
      <div className="container flex flex-col items-center justify-center bg-[#23235b] p-5 w-87.5 max-w-full shadow-[0_2px_10px_#ffffff33] rounded-md">
        <h2 className="text-[32px] text-center mx-0 mt-2.5 mb-5">
          Password Generator
        </h2>
        <div className="bg-black/40 flex justify-start items-center relative text-[18px] tracking-[1px] py-3 px-2.5 h-12.5 w-full rounded-md">
          <span ref={resultEl}></span>
          <button
            className="absolute top-1.25 right-1.25 w-10 h-10 text-xl border-none bg-[#3b3b98] text-white py-2 px-3 cursor-pointer active:scale-[0.98] rounded-md"
            onClick={copyPassword}
          >
            <FaClipboard />
          </button>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center my-3.75">
            <label>Password Length</label>
            <input
              className="text-xl border-none bg-[#3b3b98] text-white p-2"
              type="number"
              ref={lengthEl}
              min={4}
              max={20}
              value={length}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between items-center my-3.75">
            <label>Include Uppercase Letters</label>
            <input
              className="text-black"
              type="checkbox"
              ref={uppercaseEl}
              defaultChecked
            />
          </div>
          <div className="flex justify-between items-center my-3.75">
            <label>Include Lowercase Letters</label>
            <input
              className="text-black"
              type="checkbox"
              ref={lowercaseEl}
              defaultChecked
            />
          </div>
          <div className="flex justify-between items-center my-3.75">
            <label>Include Numbers</label>
            <input
              className="text-black"
              type="checkbox"
              ref={numbersEl}
              defaultChecked
            />
          </div>
          <div className="flex justify-between items-center my-3.75">
            <label>Include Symbols</label>
            <input
              className="text-black"
              type="checkbox"
              ref={symbolsEl}
              defaultChecked
            />
          </div>
        </div>

        <button
          className="w-full h-10 text-xl border-none bg-[#3b3b98] text-white py-2 px-3 cursor-pointer active:scale-[0.98] block rounded-md"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>

      <div id="toasts" className="fixed right-5 bottom-5" ref={toastsEl}></div>
    </div>
  );
};

export default PasswordGenerator;
