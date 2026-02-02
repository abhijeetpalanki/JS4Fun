import { useState, useEffect } from "react";

const StopwatchTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-lg font-semibold">Stopwatch Timer</h1>
      <div className="py-4 text-xl font-semibold">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="flex w-1/3 max-w-sm justify-evenly">
        {running ? (
          <button
            className="px-3.5 py-1 border rounded-lg"
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            className="px-3 py-1 border rounded-lg"
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
        )}

        <button
          className="px-2.5 py-1 border rounded-lg"
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopwatchTimer;
