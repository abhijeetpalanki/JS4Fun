import React, { useEffect, useState } from "react";

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
      className={`bg-[crimson] rounded-2xl w-[100px] h-[100px] flex items-center justify-center mx-4 cursor-pointer duration-[0.3s] hover:opacity-[0.7] active:scale-[1.1] ${
        playing ? "scale-[1.1]" : ""
      }`}
      onClick={play}
    >
      <div className="text-4xl text-white">{letter}</div>
    </div>
  );
};

export default Drum;
