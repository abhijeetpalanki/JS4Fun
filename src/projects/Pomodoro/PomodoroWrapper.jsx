import React from "react";
import SettingsContextProvider from "../../context/SettingsContext";
import PomodoroMain from "./PomodoroMain";

const Pomodoro = () => {
  return (
    <SettingsContextProvider>
      <PomodoroMain />
    </SettingsContextProvider>
  );
};

export default Pomodoro;
