const Note = ({ note, color }) => {
  const handleClick = async (e) => {
    const sound = await import(`./sounds/piano_${e.currentTarget.value}.mp3`);
    const audio = new Audio(sound.default);
    audio.play();
  };

  return color === "white" ? (
    <button
      className=" w-[60px] h-[200px] bg-white border border-black shadow-[2px_5px] m-[1px] active:bg-[#eee]"
      onClick={handleClick}
      value={note}
    ></button>
  ) : (
    <button
      className="w-[40px] h-[130px] bg-black  border border-black absolute m-[1px] -ml-[20px] active:bg-[#333]"
      onClick={handleClick}
      value={note}
    ></button>
  );
};

export default Note;
