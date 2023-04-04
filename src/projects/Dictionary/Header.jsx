import { useState } from "react";

const Header = ({ inputWord, setInputWord }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputWord(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputWord(value);
      setValue("");
    }
  };

  return (
    <div className="bg-gray-700">
      <div className="container flex-col py-8 mx-auto">
        <h1 className="text-3xl font-bold text-center text-white">
          Dictionary
        </h1>
        <p className="mt-1 mb-10 text-lg text-center text-slate-300">
          Find definitions for a word
        </p>

        <div className="flex flex-col items-center justify-center mt-5">
          <div className="flex border-2 border-gray-200 rounded">
            <input
              type="text"
              className="px-4 py-2 outline-none md:w-80"
              placeholder="Search..."
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <button
              className="px-4 py-2 text-white bg-blue-400 border-l"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>

          {inputWord && (
            <h3 className="mt-4 text-center text-gray-50">
              Result for:{" "}
              <span className="font-bold text-white">{inputWord}</span>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
