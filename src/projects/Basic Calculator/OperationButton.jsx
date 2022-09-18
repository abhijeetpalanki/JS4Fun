import React from "react";
import { ACTIONS } from "./BasicCalculator";

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      className="text-[2rem] outline-none bg-white/75"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
