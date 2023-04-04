import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";
import useModal from "./useModal";

const AnimatedModals = () => {
  const { modalOpen, close, open } = useModal();

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-[#101315] font-['Montserrat'] overflow-hidden">
      <motion.main className="m-auto flex flex-col p-[2rem] items-center justify-center">
        <Header />
        <SubHeader text="Drop In Animation" />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="[background:linear-gradient(10deg,#ffaa00,#ff6a00)] text-[#101315] h-[3rem] rounded-[4px] font-[600] text-[1.25rem] tracking-[1.25px] py-0 px-[1rem]"
          onClick={open}
        >
          Launch modal
        </motion.button>
      </motion.main>

      <ModalContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text="Drop In Animation"
            type="dropIn"
            handleClose={close}
          />
        )}
      </ModalContainer>
    </div>
  );
};

const Header = () => (
  <motion.h1 className="text-[#c273ff] text-[175%] lg:text-[250%] font-[400]font-['Montserrat']">
    Framer Motion
    <span className="text-[#00b7ff]"> ⚛️ Animated Modal</span>
  </motion.h1>
);

const SubHeader = ({ text }) => (
  <motion.h2 className="my-[1rem] mx-auto text-[#9e9e9e]">{text}</motion.h2>
);

const ModalContainer = ({ children }) => (
  <AnimatePresence initial={false} mode="wait">
    {children}
  </AnimatePresence>
);

export default AnimatedModals;
