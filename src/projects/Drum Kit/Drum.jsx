import { useEffect, useState } from "react";

const Drum = ({ sound, letter }) => {
  const [playing, setPlaying] = useState(false);
  const play = () => {
    setPlaying(true);

    new Audio(sound).play();

    setTimeout(() => {
      setPlaying(false);
    }, 150);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === letter.toLowerCase()) {
        play();
      }
    });
  }, []);

  return (
    <div
      className={`bg-[#dc143c] rounded-2xl w-25 h-25 flex items-center justify-center mx-4 cursor-pointer duration-300 hover:opacity-[0.7] active:scale-[1.1] mb-2 md:mb-0 ${
        playing ? "scale-[1.1]" : ""
      }`}
      onClick={play}
    >
      <div className="text-4xl text-white">{letter}</div>
    </div>
  );
};

export default Drum;
