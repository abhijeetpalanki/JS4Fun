import { useEffect } from "react";
import BgImg from "./bg.jpg";

const Relaxer = () => {
  useEffect(() => {
    const circleProgress = document.querySelector(".circle-progress");
    const numberOfBreaths = document.querySelector(".breath-input");
    const start = document.querySelector(".start");
    const instructions = document.querySelector(".instructions");
    const breathsText = document.querySelector(".breaths-text");
    let breathsLeft = 3;

    // Watching for selected breaths from user
    numberOfBreaths.addEventListener("change", () => {
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
    });

    // Grow/Shrink Circle
    const growCircle = () => {
      circleProgress.classList.add("scale-[5.3]");
      setTimeout(() => {
        circleProgress.classList.remove("scale-[5.3]");
      }, 8000);
    };

    // Breathing Instructions
    const breathTextUpdate = () => {
      breathsLeft--;
      breathsText.innerText = breathsLeft;
      instructions.innerText = "Breath in";
      setTimeout(() => {
        instructions.innerText = "Hold Breath";
        setTimeout(() => {
          instructions.innerText = "Exhale Breath Slowly";
        }, 4000);
      }, 4000);
    };

    // Breathing App Function
    const breathingApp = () => {
      const breathingAnimtaion = setInterval(() => {
        if (breathsLeft === 0) {
          clearInterval(breathingAnimtaion);
          instructions.innerText =
            "Breathing session completed. Click 'Begin' to start another session!";
          start.classList.remove("pointer-events-none", "bg-[#969696]");
          breathsLeft = numberOfBreaths.value;
          breathsText.innerText = breathsLeft;
          return;
        }
        growCircle();
        breathTextUpdate();
      }, 12000);
    };

    // Start Breathing
    start.addEventListener("click", () => {
      start.classList.add("pointer-events-none", "bg-[#969696]");
      instructions.innerText = "Get relaxed, and ready to begin breathing";
      setTimeout(() => {
        instructions.innerText = "Breathing is about to begin...";
        setTimeout(() => {
          breathingApp();
          growCircle();
          breathTextUpdate();
        }, 2000);
      }, 2000);
    });
  }, []);

  return (
    <div
      className="font-['Poppins'] flex flex-col text-white items-center justify-center min-h-screen m-0 overflow-hidden relative z-1 after:content-[''] after:absolute after:w-full after:h-full after:bg-black/60 after:-z-1"
      style={{
        background: `url("${BgImg}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col mb-10">
        <label className="mb-2 text-lg text-center">Select Breaths</label>
        <select className="breath-input border-none rounded-lg min-w-75 text-base py-2 px-1 bg-[#6236ff] text-white focus:outline-none">
          <option value="3">3 Breaths</option>
          <option value="5">5 Breaths</option>
          <option value="7">7 Breaths</option>
        </select>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-10">
        <div className="circle-outline w-75 h-75 rounded-full bg-transparent border-15 border-[#f1f1f1] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1,0_4px_6px_-2px_hsla(0,0%,0%,0.05))]"></div>
        <div className="circle-progress w-12.5 h-12.5 absolute bg-[#6236ff] rounded-full transition-all duration-4000 ease-linear shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1,0_4px_6px_-2px_hsla(0,0%,0%,0.05))]"></div>
      </div>
      <p className="mb-6 text-2xl text-center">
        Breaths remaining: <span className="breaths-text">3</span>
      </p>
      <p className="mb-8 text-center instructions">
        Are you ready to start breathing?
      </p>
      <button className="start py-2 px-5 rounded-lg bg-[#6236ff] text-white border-none transition-all duration-300 ease-linear shadow-[0_1px_3px_0_rgba(0,0,0,0.1,0_1px_2px_0_rgba(0,0,0,0.06))] hover:bg-[#f1f1f1] hover:text-[#6236ff]">
        Begin
      </button>
    </div>
  );
};

export default Relaxer;
