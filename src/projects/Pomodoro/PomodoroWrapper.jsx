import SettingsContextProvider from "./SettingsContext";
import PomodoroMain from "./PomodoroMain";

const Pomodoro = () => {
  return (
    <SettingsContextProvider>
      <PomodoroMain />
    </SettingsContextProvider>
  );
};

export default Pomodoro;
