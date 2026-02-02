import { Link, useParams } from "react-router-dom";
import TriangleImage from "./images/bg-triangle.svg";
import Paper from "./images/icon-paper.svg";
import Scissors from "./images/icon-scissors.svg";
import Rock from "./images/icon-rock.svg";

const Play = ({ setMyChoice }) => {
  const { projectId } = useParams();

  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="w-full relative mt-[3.125rem] flex flex-col">
      <img
        src={TriangleImage}
        alt="svg"
        className="absolute self-center mt-[4.375rem]"
      />
      <div className="flex justify-center">
        <Link to={`/projects/${projectId}/game`}>
          <div
            className="h-[160px] w-[160px] border-[18px] rounded-full transition-[transform] duration-[0.2s] bg-white bg-center bg-no-repeat border-[hsl(230,89%,62%)] translate-x-[1.5rem] hover:scale-[1.1] shadow-[inset_0_5px_6px_grey,0_8px_hsl(230,89%,53%)]"
            data-id="paper"
            style={{
              backgroundImage: `url(${Paper})`,
            }}
            onClick={setChoice}
          ></div>
        </Link>
        <Link to={`/projects/${projectId}/game`}>
          <div
            className="h-[160px] w-[160px] border-[18px] rounded-full transition-[transform] duration-[0.2s] bg-white bg-center bg-no-repeat border-[hsl(39,89%,49%)] translate-x-[8rem] hover:scale-[1.1] shadow-[inset_0_5px_6px_grey,0_8px_hsl(39,89%,42%)]"
            data-id="scissors"
            style={{ backgroundImage: `url(${Scissors})` }}
            onClick={setChoice}
          ></div>
        </Link>
        <Link to={`/projects/${projectId}/game`}>
          <div
            className="h-[160px] w-[160px] border-[18px] rounded-full transition-[transform] duration-[0.2s] bg-white bg-center bg-no-repeat border-[hsl(349,71%,52%)] -translate-x-[10rem] translate-y-[13rem] hover:scale-[1.1] shadow-[inset_0_5px_6px_grey,0_8px_hsl(349,71%,44%)]"
            data-id="rock"
            style={{ backgroundImage: `url(${Rock})` }}
            onClick={setChoice}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
