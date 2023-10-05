import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";
import useModal from "./useModal";

const AnimatedModals = () => {
  const { modalOpen, close, open } = useModal();

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-[#101315]">
      <motion.main className="flex flex-col items-center justify-center p-8 m-auto">
        <Header />
        <SubHeader text="Drop In Animation" />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="[background:linear-gradient(10deg,#9cfcf8,#6e7bfb)] text-[#101315] h-[3rem] rounded-[4px] font-[600] text-[1.25rem] tracking-[1.25px] py-0 px-[1rem]"
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
  <motion.h1 className="text-[#c273ff] text-[175%] lg:text-[250%] text-center font-normal">
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
