import React from "react";
import { ACTIONS } from "./BasicCalculator";

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      className="text-[2rem] outline-none bg-white/75"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
