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
        className="modal m-auto py-0 px-[2rem] rounded-[12px] flex flex-col justify-center items-center orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="py-0 px-[2rem] h-[2.5rem] bg-[#101111] text-[#ffaa00] rounded-[4px] transition-[background] ease-linear duration-[400ms] font-[600] text-[1.25rem] tracking-[1.25px] shadow-[1px_1px_15px_#03030399]"
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
