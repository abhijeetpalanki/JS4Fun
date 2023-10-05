import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const PlayerControls = ({ isPlaying, setIsPlaying, skipSong }) => {
  return (
    <div className="flex items-center justify-center mb-[30px]">
      <button
        onClick={() => skipSong(false)}
        className="border-none outline-none text-[#888] text-lg"
      >
        <FaBackward />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex my-0 mx-[30px] p-5 rounded-full shadow-[4px_4px_10px_#000000cc,-4px_-4px_10px_#ffffff66,inset_-4px_-4px_10px_#00000066,inset_4px_4px_10px_#ffffff66] border-none outline-none bg-[#ffce00] text-white text-2xl"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button
        onClick={() => skipSong()}
        className="border-none outline-none text-[#888] text-lg"
      >
        <FaForward />
      </button>
    </div>
  );
};

export default PlayerControls;
