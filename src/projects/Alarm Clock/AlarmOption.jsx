import { useContext } from "react";
import { minutesNumber, hourNumber } from "./func";
import useSelect from "./useSelect";
import { AlarmContext } from "./ContextAlarm";

function AlarmOption() {
  const [hour, setHour] = useSelect("Hour");
  const [minutes, setMinutes] = useSelect("Minutes");
  const [amPmOption, setAmPmOption] = useSelect("Am-Pm");
  const { setAlarmTime, pauseAlarm, hasAlarm, setHasAlarm } =
    useContext(AlarmContext);

  const setAlarm = () => {
    if (hasAlarm) {
      pauseAlarm();
      setHasAlarm(false);
      return;
    }

    if (
      !hour.includes("Hour") &&
      !minutes.includes("Minutes") &&
      !amPmOption.includes("Am-Pm")
    ) {
      setHasAlarm(true);
      setAlarmTime(`${hour}:${minutes} ${amPmOption}`);
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div
        className={`flex items-center gap-[10px] ${
          hasAlarm && "pointer-events-none"
        }`}
      >
        <select
          {...setHour}
          className="py-[10px] px-[15px] rounded-[5px] text-base text-center border-none outline-none bg-[hsl(240,24%,94%)] [box-shadow:-3px_-3px_5px_#fff,3px_3px_5px_hsla(240,30%,86%,1),inset_3px_3px_5px_hsla(240,30%,86%,1),inset_-3px_-3px_5px_#fff] cursor-pointer"
        >
          <option
            disabled
            value="Hour"
            className="block bg-[hsl(240,53%,49%)] text-white"
          >
            Hour
          </option>
          {hourNumber.map((hour, index) => (
            <option
              key={index}
              value={hour}
              className="block bg-[hsl(240,53%,49%)] text-white"
            >
              {hour}
            </option>
          ))}
        </select>
        <select
          {...setMinutes}
          className="py-[10px] px-[15px] rounded-[5px] text-base text-center border-none outline-none bg-[hsl(240,24%,94%)] [box-shadow:-3px_-3px_5px_#fff,3px_3px_5px_hsla(240,30%,86%,1),inset_3px_3px_5px_hsla(240,30%,86%,1),inset_-3px_-3px_5px_#fff] cursor-pointer"
        >
          <option
            disabled
            value="Minutes"
            className="block bg-[hsl(240,53%,49%)] text-white"
          >
            Minutes
          </option>
          {minutesNumber.map((minutes, index) => (
            <option
              key={index}
              value={minutes}
              className="block bg-[hsl(240,53%,49%)] text-white"
            >
              {minutes}
            </option>
          ))}
        </select>
        <select
          {...setAmPmOption}
          className="py-[10px] px-[15px] rounded-[5px] text-base text-center border-none outline-none bg-[hsl(240,24%,94%)] [box-shadow:-3px_-3px_5px_#fff,3px_3px_5px_hsla(240,30%,86%,1),inset_3px_3px_5px_hsla(240,30%,86%,1),inset_-3px_-3px_5px_#fff] cursor-pointer"
        >
          <option
            disabled
            value="Am-Pm"
            className="block bg-[hsl(240,53%,49%)] text-white"
          >
            Am/Pm
          </option>
          <option value="AM" className="block bg-[hsl(240,53%,49%)] text-white">
            Am
          </option>
          <option value="PM" className="block bg-[hsl(240,53%,49%)] text-white">
            Pm
          </option>
        </select>
      </div>
      <button
        onClick={setAlarm}
        className={`w-80 mt-[30px] h-10 border-none outline-none rounded-[5px] text-white text-base tracking-[1px] bg-[hsl(240,53%,49%)] cursor-pointer ${
          hasAlarm && "bg-orange-500 text-black"
        }`}
      >
        {hasAlarm ? "Clear Alarm" : "Set Alarm"}
      </button>
    </div>
  );
}

export default AlarmOption;
