import { ACTIONS } from "./BasicCalculator";

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      className="text-[2rem] text-black outline-none bg-white/75 border border-white hover:bg-white/90 focus:bg-white/90"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
