import Octave from "./Octave";
import { notes } from "./notes";

const SoundBoard = () => {
  return (
    <div className="sound-board-body bg-[#a164df] font-['Poppins'] flex justify-center items-center text-center h-screen overflow-hidden m-0">
      <Octave notes={notes} />
    </div>
  );
};

export default SoundBoard;
