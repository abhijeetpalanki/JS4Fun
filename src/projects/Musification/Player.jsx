import React, { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, []);

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="block bg-[#313131] p-[50px] rounded-2xl shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.8),inset_6px_6px_12px_rgba(255,255,255,0.4)]">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <h4 className="text-white text-sm uppercase font-normal text-center">
        Playing Now
      </h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p className="text-[#aaa] text-sm text-center font-normal">
        <strong>Next up: </strong>{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
};

export default Player;
