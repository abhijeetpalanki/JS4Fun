import { useState, useEffect } from "react";
import Detail from "./Detail";

const timeframes = ["yesterday", "today", "tomorrow"];

const Horoscope = () => {
  const [signs, setSigns] = useState([]);
  const [selectedSign, setSelectedSign] = useState("");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("");

  const restart = () => {
    setSelectedSign("");
    setSelectedTimeFrame("");
  };

  useEffect(() => {
    const getSigns = async () => {
      try {
        const response = await fetch(
          "http://sandipbgt.com/theastrologer/api/sunsigns/",
        );
        const data = await response.json();
        setSigns(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSigns();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-black">
      <h1 className="text-[32px] font-bold">The Daily Horoscope</h1>
      {!selectedSign ? (
        <>
          <h2 className="text-[20px]">Please select a sign</h2>
          <div className="grid grid-cols-3 gap-2.5">
            {signs.map((sign, index) => (
              <button
                className="p-2.5 text-[20px] bg-white text-black rounded-[10px] hover:bg-black hover:text-white cursor-pointer"
                key={index}
                onClick={() => setSelectedSign(sign)}
              >
                {sign}
              </button>
            ))}
          </div>
        </>
      ) : (
        !selectedTimeFrame && (
          <>
            <h2 className="text-[20px]">Please select a timeframe</h2>
            <div className="grid grid-cols-3 gap-2.5">
              {timeframes.map((timeframe, index) => (
                <button
                  className="p-2.5 text-[20px] bg-white text-black rounded-[10px] hover:bg-black hover:text-white cursor-pointer"
                  key={index}
                  onClick={() => setSelectedTimeFrame(timeframe)}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </>
        )
      )}
      {selectedTimeFrame && (
        <Detail sign={selectedSign} timeframe={selectedTimeFrame} />
      )}
      {selectedSign && (
        <button
          className="p-2.5 text-[20px] bg-black text-white rounded-[10px] mt-2.5 hover:bg-black hover:text-white cursor-pointer"
          onClick={restart}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default Horoscope;
