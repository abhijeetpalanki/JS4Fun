import { useState, useEffect } from "react";
import song1 from "./images/song-1.jpg";
import song2 from "./images/song-2.jpg";
import song3 from "./images/song-3.jpg";
import song4 from "./images/song-4.jpg";

import on from "./music/on-n-on.mp3";
import somebody from "./music/somebody-new.mp3";
import Player from "./Player";

const Musification = () => {
  const [songs] = useState([
    {
      title: "Forgot me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: song1,
      src: on,
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: song2,
      src: somebody,
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: song3,
      src: on,
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: song4,
      src: somebody,
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="h-screen bg-[#ddd] flex items-center justify-center">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default Musification;
