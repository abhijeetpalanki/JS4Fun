const PlayerDetails = ({ song }) => {
  return (
    <div>
      <div className="relative w-fit my-[50px]  mx-auto">
        <img
          className="block my-0 mx-auto w-full max-w-[250px] rounded-full shadow-[6px_6px_12px_#000000cc,-6px_-6px_12px_#ffffff66]"
          src={song.img_src}
          alt=""
        />
      </div>
      <h3 className="text-[#eee] text-[28px] [text-shadow:2px_2px_4px_#000000cc,-2px_-2px_4px_#ffffff66] text-center mb-[10px]">
        {song.title}
      </h3>
      <h4 className="text-[#aaa] [text-shadow:2px_2px_4px_#000000cc,-2px_-2px_4px_#ffffff66] text-center mb-5">
        {song.artist}
      </h4>
    </div>
  );
};

export default PlayerDetails;
