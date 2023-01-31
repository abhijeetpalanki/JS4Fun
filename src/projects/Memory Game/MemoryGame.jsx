import React, { useState, useEffect } from "react";
import helmet from "../../images/helmet-1.png";
import potion from "../../images/potion-1.png";
import ring from "../../images/ring-1.png";
import scroll from "../../images/scroll-1.png";
import shield from "../../images/shield-1.png";
import sword from "../../images/sword-1.png";
import fun from "../../images/fun.jpeg";

const items = [
  {
    src: helmet,
    matched: false,
  },
  {
    src: potion,
    matched: false,
  },
  {
    src: ring,
    matched: false,
  },
  {
    src: scroll,
    matched: false,
  },
  {
    src: shield,
    matched: false,
  },
  {
    src: sword,
    matched: false,
  },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setFirstChoice(null);
    setSecondChoice(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleClick = (card) => {
    if (!disabled) {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    }
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="font-['Oswald'] min-h-screen m-0 text-[1.5em] flex justify-center items-start text-center bg-[#1b1523] text-white">
      <div className="max-w-[860px] py-10">
        <button
          onClick={shuffleCards}
          className="border-[2px] border-white py-[6px] px-[12px] rounded-[4px] text-white font-bold text-[1em] hover:bg-[#c23866] hover:text-white"
        >
          New Game
        </button>
        <p className="mt-2">Turns: {turns}</p>

        <div className="mt-10 grid grid-cols-4 gap-5">
          {cards.map((card) => {
            const flipped =
              card === firstChoice || card === secondChoice || card.matched;

            return (
              <div key={card.id} className="card relative">
                <div className={flipped ? "flipped delay-200" : ""}>
                  <img
                    className="w-full block border-[2px] border-white rounded-md absolute transition-all ease-in duration-200 front"
                    src={card.src}
                    alt="card front"
                  />
                  <img
                    className="w-full block border-[2px] border-white rounded-md transition-all ease-in duration-200 back"
                    onClick={() => handleClick(card)}
                    src={fun}
                    alt="card back"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
