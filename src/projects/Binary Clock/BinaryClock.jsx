import { useEffect, useState } from "react";

const BinaryClock = () => {
  const binaryTime = () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    const divide = (x) => [
      Math.floor(x / 10)
        .toString(2)
        .padStart(4, "0"),
      (x % 10).toString(2).padStart(4, "0"),
    ];

    return [...divide(hours), ...divide(minutes), ...divide(seconds)];
  };

  const [time, setTime] = useState(binaryTime());

  useEffect(() => {
    setInterval(() => {
      setTime(binaryTime);
    }, 1000);
  }, []);

  return (
    <div className="flex items-center gap-[5px] justify-center h-screen">
      {time.map((x, i) => (
        <div className="binary flex flex-col gap-[5px]" key={i}>
          <span
            className={`block w-8 h-8 rounded-full ${
              x[0] === "1" ? "bg-[#facc15]" : "bg-[#3f4753]"
            }`}
          ></span>
          <span
            className={`block w-8 h-8 rounded-full ${
              x[1] === "1" ? "bg-[#facc15]" : "bg-[#3f4753]"
            }`}
          ></span>
          <span
            className={`block w-8 h-8 rounded-full ${
              x[2] === "1" ? "bg-[#facc15]" : "bg-[#3f4753]"
            }`}
          ></span>
          <span
            className={`block w-8 h-8 rounded-full ${
              x[3] === "1" ? "bg-[#facc15]" : "bg-[#3f4753]"
            }`}
          ></span>
          <p className="text-center text-[#3f4753] text-4xl">
            {parseInt(x, 2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BinaryClock;
