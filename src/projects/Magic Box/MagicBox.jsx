import { useEffect, useRef } from "react";
import "./MagicBox.css";

const MagicBox = () => {
  const magicBtnRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;

        boxesRef.current.appendChild(box);
      }
    }

    magicBtnRef.current.addEventListener("click", () =>
      boxesRef.current.classList.toggle("big")
    );
  }, []);

  return (
    <div className="magic-box-body bg-[#fafafa] font-['Roboto'] flex items-center justify-center h-screen m-0">
      <button
        className="magic bg-[#f9ca24] text-white font-['Poppins'] border-0 rounded-[3px] text-[16px] py-[12px] px-[20px] fixed top-[20px] tracking-[1px] z-[100] [box-shadow:0_3px_rgba(249,202,36,0.5)] active:[box-shadow:none] active:translate-y-[2px] focus:outline-none"
        ref={magicBtnRef}
      >
        Magic 🎩
      </button>
      <div
        ref={boxesRef}
        className="boxes big flex flex-wrap justify-around items-center mt-[50px] h-[500px] w-[500px] relative [transition:0.4s_ease]"
      ></div>
    </div>
  );
};

export default MagicBox;
