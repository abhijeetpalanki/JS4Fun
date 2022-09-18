import React, { useEffect } from "react";
import "./SoundBoard.css";

import bliss from "../../music/bliss.mp3";
import calm from "../../music/calm.mp3";
import cinematic from "../../music/cinematic.mp3";
import peaceful from "../../music/peaceful.mp3";
import powerful from "../../music/powerful.mp3";
import spring from "../../music/spring.mp3";

const sounds = ["bliss", "calm", "cinematic", "peaceful", "powerful", "spring"];

const SoundBoard = () => {
  useEffect(() => {
    sounds.forEach((sound) => {
      const btn = document.createElement("button");
      btn.classList.add("btn");

      btn.innerText = sound;

      btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
      });

      document.getElementById("buttons").appendChild(btn);
    });
  }, []);

  const stopSongs = () => {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);

      song.pause();
      song.currentTime = 0;
    });
  };

  return (
    <div className="sound-board-body bg-[#a164df] font-['Poppins'] flex flex-wrap justify-center items-center text-center h-[100vh] overflow-hidden m-0">
      <audio id="bliss" src={bliss}></audio>
      <audio id="calm" src={calm}></audio>
      <audio id="cinematic" src={cinematic}></audio>
      <audio id="peaceful" src={peaceful}></audio>
      <audio id="powerful" src={powerful}></audio>
      <audio id="spring" src={spring}></audio>

      <div id="buttons"></div>
    </div>
  );
};

export default SoundBoard;
