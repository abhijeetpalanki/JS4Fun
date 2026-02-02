import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-[clamp(50%,700px,90%)] h-[min(50%,300px)] m-auto py-0 px-8 rounded-xl flex flex-col justify-around items-center [background:linear-gradient(10deg,#9cfcf8,#6e7bfb)]"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="py-0 px-8 h-10 bg-[#101111] text-[#9cfcf8] rounded-sm transition-[background] ease-linear duration-400 font-semibold text-[1.25rem] tracking-[1.25px] shadow-[1px_1px_15px_#03030399]"
          onClick={handleClose}
        >
          Close
        </button>
        <p>{text}</p>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
