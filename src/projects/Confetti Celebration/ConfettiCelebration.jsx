import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiCelebration = () => {
  const [dim, setDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isClicked, setIsClicked] = useState(false);

  const detectSize = () => {
    setDim({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dim]);

  return (
    <div className="flex items-center justify-center h-screen bg-[hsl(261,67%,8%)] perspective-1000">
      <button
        onClick={() => setIsClicked(!isClicked)}
        className="text-[2rem] relative text-[#ffffff] bg-[#6930f8] bg-[radial-gradient(#975df4,transparent_75%)] bg-no-repeat bg-position-[0_100px] py-4 px-8 rounded-full cursor-pointer transition-[background-position] duration-200 transform-style-3d hover:bg-position-[0_35px] focus:bg-position-[0_35px]"
      >
        Party Time 🥳
      </button>
      {isClicked && (
        <Confetti width={dim.width} height={dim.height} tweenDuration={1000} />
      )}
    </div>
  );
};

export default ConfettiCelebration;
