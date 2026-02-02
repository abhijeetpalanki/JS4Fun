const Note = ({ note, color }) => {
  const handleClick = async (e) => {
    const sound = await import(`./sounds/piano_${e.currentTarget.value}.mp3`);
    const audio = new Audio(sound.default);
    audio.play();
  };

  return color === "white" ? (
    <button
      className=" w-15 h-50 bg-white border border-black shadow-[2px_5px] m-px active:bg-[#eee]"
      onClick={handleClick}
      value={note}
    ></button>
  ) : (
    <button
      className="w-10 h-32.5 bg-black  border border-black absolute m-px -ml-5 active:bg-[#333]"
      onClick={handleClick}
      value={note}
    ></button>
  );
};

export default Note;
