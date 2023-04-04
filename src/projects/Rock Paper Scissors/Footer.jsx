import { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <footer className="w-full">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-4">
          Coded by{" "}
          <a
            href="https://github.com/abhijeetpalanki"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-4 text-black bg-white rounded-lg cursor-pointer hover:text-red-500"
          >
            Abhijeet Palanki
          </a>
        </div>
        <button
          className="absolute bottom-4 py-[7px] px-[25px] right-4 rounded-[0.4rem] border-[3px] border-[#606e85] text-[#606e85] font-semibold tracking-[2px] hover:bg-white/80 hover:text-[#3b4363] hover:cursor-pointer"
          onClick={toggle}
        >
          Rules
        </button>
      </footer>
      {modal && <Modal toggle={toggle} />}
    </>
  );
};

export default Footer;
