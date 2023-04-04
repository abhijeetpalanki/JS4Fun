import { useState } from "react";

const Input = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const shortenLink = () => {
    setValue("");
    setInputValue(value);
  };

  return (
    <div className="input-container z-[100]">
      <h1 className="text-[3.5rem] font-bold text-white mb-[1.5rem]">
        URL <span className="text-[#3e1e68]">Shortener</span>
      </h1>
      <div className="flex mb-[2rem]">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Paste a link to shorten it"
          className="w-full pt-[0.5rem] pr-[0.2rem] pb-[0.5rem] pl-0 indent-[1rem] border-0 outline-none text-[1rem] rounded-tl-[3px] rounded-bl-[3px] placeholder:text-[0.9rem]"
        />
        <button
          className="py-0 px-[1rem] h-[3rem] text-[0.8rem] uppercase font-bold rounded-tr-[3px] rounded-br-[3px] text-white bg-[#3e1e68] border-0"
          onClick={shortenLink}
        >
          Shorten
        </button>
      </div>
    </div>
  );
};

export default Input;
