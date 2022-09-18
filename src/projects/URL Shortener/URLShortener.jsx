import React, { useState } from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Input from "./Input";
import Result from "./Result";
import "./URLShortener.css";

const URLShortener = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="url-shortener-body font-['Playfair Display'] flex flex-col items-center justify-center h-[100vh] overflow-hidden m-0">
      <Input setInputValue={setInputValue} />
      <BackgroundAnimation />
      <Result inputValue={inputValue} />
    </div>
  );
};

export default URLShortener;
