import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const EmotePicker = () => {
  const [emote, setEmote] = useState(null);

  const handleEmoteClick = (e, emoteObject) => {
    setEmote(emoteObject);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <EmojiPicker
        onEmojiClick={handleEmoteClick}
        theme="dark"
        emojiStyle="google"
      />

      {emote != null && (
        <div className="flex items-center justify-center w-87.5 bg-black text-white rounded-lg px-2 py-4 mt-2">
          <img src={emote.target.currentSrc} alt="emote" />
          <h1 className="">{emote.target.alt}</h1>
        </div>
      )}
    </div>
  );
};

export default EmotePicker;
