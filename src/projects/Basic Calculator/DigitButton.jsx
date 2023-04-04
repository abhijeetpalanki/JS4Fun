import { ACTIONS } from "./BasicCalculator";

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      className="text-[2rem] text-black outline-none bg-white/75 border border-white hover:bg-white/90 focus:bg-white/90"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
