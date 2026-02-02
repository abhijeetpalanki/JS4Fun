import { useState, useContext } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { AlarmContext } from "./ContextAlarm";

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const { hasAlarm } = useContext(AlarmContext);

  const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
      mm = date.getMinutes() * 6,
      ss = date.getSeconds() * 6;

    setHour(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
    setSeconds(`rotateZ(${ss}deg)`);
  };
  setInterval(clock, 1000);

  return (
    <div className="relative w-[260px] h-[260px] [box-shadow:-6px_-6px_16px_#fff,6px_6px_16px_#d1d1e6,inset_6px_6px_16px_#d1d1e6,inset_-6px_-6px_16px_#fff] rounded-full self-center flex justify-center items-center duration-[400ms]">
      <FcAlarmClock
        className={`absolute text-[45px] -left-[25px] -top-[20px] ${
          hasAlarm && "animate-alarm"
        }`}
      />
      {/* clock__twelve  */}
      <span className="top-5 left-1/2 -translate-x-1/2 rotate-90 absolute w-6 h-[1px] bg-[#3b3bbf]"></span>
      {/* clock__three  */}
      <span className="top-1/2 right-3 absolute w-6 h-[1px] bg-[#3b3bbf]"></span>
      {/* clock__six  */}
      <span className="bottom-5 left-1/2 -translate-x-1/2 rotate-90 absolute w-6 h-[1px] bg-[#3b3bbf]"></span>
      {/* clock__nine */}
      <span className="left-3 top-1/2 absolute w-6 h-[1px] bg-[#3b3bbf]"></span>
      {/* clock__rounder */}
      <div className="w-3 h-3 bg-[#3b3bbf] rounded-full border-2 border-[#ececf3] z-10"></div>
      {/* clock__hour  */}
      <div
        className="absolute flex justify-center w-[105px] h-[140px] before:content-[''] before:absolute before:bg-[#4f4f64] before:w-1 before:h-[5.5rem] rounded-xl z-[1]"
        style={{ transform: hour }}
      ></div>
      {/* clock__minutes  */}
      <div
        className="absolute flex justify-center w-[136px] h-[186px] before:content-[''] before:absolute before:bg-[#4f4f64] before:w-1 before:h-[6.5rem] rounded-xl z-[1]"
        style={{ transform: minutes }}
      ></div>
      {/* clock__seconds */}
      <div
        className="absolute flex justify-center w-[130px] h-[200px] before:content-[''] before:absolute before:bg-[#3b3bbf] before:w-[0.125rem] before:h-[7.5rem] rounded-xl z-[1]"
        style={{ transform: seconds }}
      ></div>
    </div>
  );
}

export default AnalogClock;
