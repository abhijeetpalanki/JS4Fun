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

  const getSigns = async () => {
    const response = await fetch(
      "http://sandipbgt.com/theastrologer/api/sunsigns/"
    );
    const data = await response.json();
    setSigns(data);
  };

  useEffect(() => {
    getSigns();
  }, []);

  return (
    <div className="horoscope-body bg-[darkslategrey] text-white font-['Montserrat'] flex flex-col justify-center items-center overflow-hidden h-screen m-0">
      <h1 className="text-[32px] font-bold">The Daily Horoscope</h1>
      {!selectedSign ? (
        <>
          <h2 className="text-[20px]">Please select a sign</h2>
          <div className="grid grid-cols-3 gap-[10px]">
            {signs.map((sign, index) => (
              <button
                className="btn sign p-[10px] text-[20px] bg-black rounded-[10px] hover:bg-white hover:text-black"
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
            <div className="grid grid-cols-3 gap-[10px]">
              {timeframes.map((timeframe, index) => (
                <button
                  className="btn timeframe p-[10px] text-[20px] bg-black rounded-[10px] hover:bg-white hover:text-black"
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
        <button className="btn" onClick={restart} style={{ marginTop: "10px" }}>
          Restart
        </button>
      )}
    </div>
  );
};

export default Horoscope;
