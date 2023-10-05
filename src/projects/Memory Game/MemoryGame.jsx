import { useState, useEffect } from "react";
import { helmet, potion, ring, scroll, shield, sword, fun } from "./images";

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
    <div className="h-screen text-[1.5em] flex justify-center items-center text-center bg-[#1b1523] text-white">
      <div className="max-w-[860px] py-10">
        <button
          onClick={shuffleCards}
          className="border-[2px] border-white py-[6px] px-[12px] rounded-[4px] text-white font-bold text-[1em] hover:bg-[#c23866] hover:text-white"
        >
          New Game
        </button>
        <p className="mt-2">Turns: {turns}</p>

        <div className="grid grid-cols-4 gap-5 mt-10">
          {cards.map((card) => {
            const flipped =
              card === firstChoice || card === secondChoice || card.matched;

            return (
              <div key={card.id} className="relative card">
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
