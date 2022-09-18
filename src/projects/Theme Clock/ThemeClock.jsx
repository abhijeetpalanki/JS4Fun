import React, { useEffect, useRef } from "react";
import "./ThemeClock.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ThemeClock = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);

  const toggleTheme = (e) => {
    const body = document.querySelector(".theme-clock-body");

    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      e.target.innerHTML = "Dark mode";
    } else {
      body.classList.add("dark");
      e.target.innerHTML = "Light mode";
    }
  };

  const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hourRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(
      hoursForClock,
      0,
      12,
      0,
      360
    )}deg)`;
    minuteRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(
      minutes,
      0,
      60,
      0,
      360
    )}deg)`;
    secondRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(
      seconds,
      0,
      60,
      0,
      360
    )}deg)`;

    timeRef.current.innerHTML = `${hoursForClock}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
    dateRef.current.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  };

  // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useEffect(() => {
    setTime();

    setInterval(setTime, 1000);
  }, []);

  return (
    <div className="theme-clock-body">
      <button className="toggle" onClick={toggleTheme}>
        Dark Mode
      </button>

      <div className="clock-container">
        <div className="clock">
          <div className="needle hour" ref={hourRef}></div>
          <div className="needle minute" ref={minuteRef}></div>
          <div className="needle second" ref={secondRef}></div>
          <div className="center-point"></div>
        </div>

        <div className="time" ref={timeRef}></div>
        <div className="date" ref={dateRef}>
          <span className="circle"> 8</span>
        </div>
      </div>
    </div>
  );
};

export default ThemeClock;
