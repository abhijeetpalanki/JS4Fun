import Close from "./images/icon-close.svg";
import ImageRules from "./images/image-rules.svg";

const Modal = ({ toggle }) => {
  return (
    <div className="absolute z-10 flex items-center justify-center w-full h-full">
      <div className="text-[#3b4363] bg-white rounded-lg p-[30px]">
        <div className="flex justify-between mb-[30px]">
          <h1 className="p-0 m-0 uppercase">Rules</h1>
          <button
            className="border-none self-center text-[#3b4363] hover:cursor-pointer"
            onClick={toggle}
          >
            <img src={Close} alt="close" className="w-full" />
          </button>
        </div>
        <img src={ImageRules} alt="rules" />
      </div>
    </div>
  );
};

export default Modal;
