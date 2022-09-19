import React, { useEffect, useState } from "react";
import ClockSvg from "../../images/clock.svg";
import ringtone from "../../sounds/clock-ringtone.mp3";

const AlarmClock = () => {
  const [audio] = useState(new Audio(ringtone));
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  let alarmTimeToSet;

  useEffect(() => {
    const currentTime = document.querySelector(".project-body h1"),
      selectMenu = document.querySelectorAll(".project-body .column select");

    for (let i = 12; i > 0; i--) {
      i = i < 10 ? "0" + i : i;
      let option = `<option class="text-black" value="${i}">${i}</option>`;
      selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
    }

    for (let i = 59; i >= 0; i--) {
      i = i < 10 ? "0" + i : i;
      let option = `<option class="text-black" value="${i}">${i}</option>`;
      selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
    }

    for (let i = 2; i > 0; i--) {
      let ampm = i == 1 ? "AM" : "PM";
      let option = `<option class="text-black" value="${ampm}">${ampm}</option>`;
      selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
    }

    setInterval(() => {
      let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";

      if (h >= 12) {
        h = h - 12;
        ampm = "PM";
      }

      h = h == 0 ? (h = 12) : h;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

      if (alarmTimeToSet == `${h}:${m} ${ampm}`) {
        audio.play();
      }
    }, 1000);
  }, []);

  const handleSetAlarmClick = () => {
    const selectMenu = document.querySelectorAll(
        ".project-body .column select"
      ),
      setAlarmBtn = document.querySelector(".project-body button");

    if (isAlarmSet) {
      alarmTimeToSet = "";
      setIsDisabled(false);
      setAlarmBtn.innerText = "Set Alarm";
      setIsAlarmSet(false);
      audio.pause();
      return;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

    if (
      time.includes("Hour") ||
      time.includes("Minute") ||
      time.includes("AM/PM")
    ) {
      selectMenu[0].value = "Hour";
      selectMenu[1].value = "Minute";
      selectMenu[2].value = "AM/PM";
      return alert("Please, select a valid time to set alarm!");
    }

    setIsAlarmSet(true);
    alarmTimeToSet = time;
    setIsDisabled(true);
    setAlarmBtn.innerText = "Clear Alarm";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#4a98f7] font-['Poppins'] m-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-[440px] bg-white py-[30px] pl-[30px] pr-[38px] rounded-[10px]">
        <img src={ClockSvg} alt="clock" className="max-w-[103px]" />
        <h1 className="text-[38px] font-medium my-[30px] mx-0"></h1>
        <div
          className={`flex flex-row justify-between w-full ${
            isDisabled ? "opacity-60 pointer-events-none" : ""
          }`}
        >
          {/* Hour */}
          <div className="column border-[1px] border-[#999] py-0 px-[10px] rounded-[5px] w-[calc(100% / 3 - 5px)]">
            <select
              className="outline-none border-none h-[53px] w-full text-[19px]"
              defaultValue="Hour"
            >
              <option value="Hour" hidden>
                Hour
              </option>
            </select>
          </div>

          {/* Minute */}
          <div className="column border-[1px] border-[#999] py-0 px-[10px] rounded-[5px] w-[calc(100% / 3 - 5px)]">
            <select
              className="outline-none border-none h-[53px] w-full text-[19px]"
              defaultValue="Minute"
            >
              <option value="Minute" hidden>
                Minute
              </option>
            </select>
          </div>

          {/* AM/PM */}
          <div className="column border-[1px] border-[#999] py-0 px-[10px] rounded-[5px] w-[calc(100% / 3 - 5px)]">
            <select
              className="outline-none border-none h-[53px] w-full text-[19px]"
              defaultValue="AM/PM"
            >
              <option value="AM/PM" hidden>
                AM/PM
              </option>
            </select>
          </div>
        </div>
        <button
          className="w-full outline-none border-none mt-5 text-[20px] py-[17px] px-0 rounded-[5px] bg-[#4a98f7] text-white"
          onClick={handleSetAlarmClick}
        >
          Set Alarm
        </button>

        {isAlarmSet && (
          <small className="mt-5">Refresh page to stop the tone</small>
        )}
      </div>
    </div>
  );
};

export default AlarmClock;
