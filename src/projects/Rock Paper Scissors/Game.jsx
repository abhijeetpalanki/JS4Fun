import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Paper from "./images/icon-paper.svg";
import Scissors from "./images/icon-scissors.svg";
import Rock from "./images/icon-rock.svg";

const Game = ({ myChoice }) => {
  let iconClass, imageClass;
  const { projectId } = useParams();
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);
  const [houseIconClass, setHouseIconClass] = useState("");
  const [houseImageClass, setHouseImageClass] = useState("");

  const result = () => {
    const choices = ["rock", "paper", "sciccors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);

    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
    } else {
      setPlayerWin("draw");
    }
  };

  if (myChoice === "paper") {
    iconClass =
      "border-[hsl(230,89%,62%)] shadow-[inset_0_5px_6px_grey,0_8px_hsl(230,89%,53%),0_0_0_50px_rgba(#ffffff,0.07),0_0_0_100px_rgba(#ffffff,0.05),0_0_0_150px_rgba(#ffffff,0.025)]";
    imageClass = `url(${Paper})`;
  } else if (myChoice === "scissors") {
    iconClass =
      "border-[hsl(39,89%,49%)] shadow-[inset_0_5px_6px_grey,0_8px_hsl(39,89%,42%),0_0_0_50px_rgba(#ffffff,0.07),0_0_0_100px_rgba(#ffffff,0.05),0_0_0_150px_rgba(#ffffff,0.025)]";
    imageClass = `url(${Scissors})`;
  } else if (myChoice === "rock") {
    iconClass =
      "border-[hsl(349,71%,52%)] shadow-[inset_0_5px_6px_grey,0_8px_hsl(349,71%,44%),0_0_0_50px_rgba(#ffffff,0.07),0_0_0_100px_rgba(#ffffff,0.05),0_0_0_150px_rgba(#ffffff,0.025)]";
    imageClass = `url(${Rock})`;
  }

  const applyHouseStyles = () => {
    if (house === "paper") {
      setHouseIconClass(
        "border-[hsl(230,89%,62%)] shadow-[inset_0_5px_6px_grey,0_8px_hsl(230,89%,53%),0_0_0_50px_rgba(#ffffff,0.07),0_0_0_100px_rgba(#ffffff,0.05),0_0_0_150px_rgba(#ffffff,0.025)]"
      );
      setHouseImageClass(`url(${Paper})`);
    } else if (house === "scissors") {
      setHouseIconClass(
        "border-[hsl(39,89%,49%)] shadow-[inset_0_5px_6px_grey,0_8px_hsl(39,89%,42%),0_0_0_50px_rgba(#ffffff,0.07),0_0_0_100px_rgba(#ffffff,0.05),0_0_0_150px_rgba(#ffffff,0.025)]"
      );
      setHouseImageClass(`url(${Scissors})`);
    } else if (house === "rock") {
      setHouseIconClass(
        "border-[hsl(349,71%,52%)] shadow-[inset_0_5px_6px_grey,0_8px_hsl(349,71%,44%),0_0_0_50px_rgba(#ffffff,0.07),0_0_0_100px_rgba(#ffffff,0.05),0_0_0_150px_rgba(#ffffff,0.025)]"
      );
      setHouseImageClass(`url(${Rock})`);
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : result();

    applyHouseStyles();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="flex mt-[50px] flex-nowrap items-center">
      <div className="flex flex-col mr-10">
        <span className="uppercase text-[1.2rem] text-center font-light mb-10">
          You Picked
        </span>
        <div
          className={`${iconClass} rounded-full transition-[transform] duration-[0.2s] bg-white bg-center bg-no-repeat hover:scale-[1.1] h-[250px] w-[250px] border-[25px] bg-[length:50%]`}
          style={{ backgroundImage: imageClass }}
        ></div>
      </div>

      {playerWin && (
        <div className="flex flex-col pt-20 mr-10">
          <span className="uppercase text-[2.5rem] text-center font-light mb-10">
            {playerWin === "win"
              ? "You Win"
              : playerWin === "lose"
              ? "You Lose"
              : "Draw"}
          </span>
          <Link
            to={`/projects/${projectId}`}
            className="bg-white text-red-500 py-[10px] px-[20px] rounded-md text-base"
            onClick={() => setHouse("")}
          >
            Play Again
          </Link>
        </div>
      )}

      <div className="flex flex-col mr-10">
        <span className="uppercase text-[1.2rem] text-center font-light mb-10">
          The House Picked
        </span>
        {counter === 0 ? (
          <div
            className={`${houseIconClass} rounded-full transition-[transform] duration-[0.2s] bg-white bg-center bg-no-repeat hover:scale-[1.1] h-[250px] w-[250px] border-[25px] bg-[length:50%]`}
            style={{ backgroundImage: houseImageClass }}
          ></div>
        ) : (
          <div className="h-[250px] w-[250px] rounded-full bg-black/30 text-9xl flex flex-col justify-center">
            {counter}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
