import { useContext } from "react";
import { AlarmContext } from "./ContextAlarm";

function DigitalClock() {
  const { hourDigital, minutesDigital, amPm, dayNow, monthNow, yearNow } =
    useContext(AlarmContext);

  return (
    <div>
      <div className="flex justify-center">
        {/* hour  */}
        <div className="text-5xl font-medium text-[#12123b]">{`${hourDigital}:`}</div>
        {/* minutes */}
        <div className="text-5xl font-medium text-[#12123b]">
          {minutesDigital}
        </div>
        {/* ampm */}
        <div className="text-[0.625rem] text-[#12123b] font-medium ml-1">
          {amPm}
        </div>
      </div>

      {/* date */}
      <div className="text-center text-[0.813rem] font-medium">
        <span>{`${dayNow} `}</span>
        <span>{`${monthNow} , `}</span>
        <span>{yearNow}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
