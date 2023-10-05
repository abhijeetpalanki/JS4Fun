import { useState } from "react";
import Drum from "./Drum";
import {
  boom,
  clap,
  hihat,
  kick,
  openhat,
  ride,
  snare,
  tink,
  tom,
} from "./sounds";

const DrumKit = () => {
  const [sounds] = useState([
    {
      name: "boom",
      sound: boom,
      key: "A",
    },
    {
      name: "clap",
      sound: clap,
      key: "S",
    },
    {
      name: "hihat",
      sound: hihat,
      key: "D",
    },
    {
      name: "kick",
      sound: kick,
      key: "F",
    },
    {
      name: "openhat",
      sound: openhat,
      key: "G",
    },
    {
      name: "ride",
      sound: ride,
      key: "H",
    },
    {
      name: "snare",
      sound: snare,
      key: "J",
    },
    {
      name: "tink",
      sound: tink,
      key: "K",
    },
    {
      name: "tom",
      sound: tom,
      key: "L",
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-8 text-5xl">Drum Kit</h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {sounds.map((sound, i) => (
          <Drum key={i} letter={sound.key} sound={sound.sound} />
        ))}
      </div>
    </div>
  );
};

export default DrumKit;
