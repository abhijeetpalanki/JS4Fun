import { useEffect, useContext } from "react";
import { SettingsContext } from "./SettingsContext";
import CountdownAnimation from "./CountdownAnimation";
import Settings from "./Settings";
import Button from "./Button";

const PomodoroMain = () => {
  const {
    updateExecute,
    pomodoro,
    executing,
    startAnimate,
    startTimer,
    pauseTimer,
    settingsBtn,
    setCurrentTimer,
    childrenAnimate,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate, updateExecute]);

  return (
    <div className="text-[#c9ccea] flex flex-col items-center justify-center min-h-screen bg-[#272a55] bg-gradient-radial from-[#1e2140] to-[#151932]">
      <h1 className="text-5xl mb-[0.2rem] leading-normal">Pomodoro</h1>
      <small className="text-xl">Be productive the right way.</small>

      {pomodoro === 0 ? (
        <Settings />
      ) : (
        <>
          <ul className="list-none flex uppercase text-[0.8rem] p-[0.3rem] bg-[#0c0e1b] rounded-3xl">
            <li>
              <Button
                title="Work"
                activeClass={
                  executing.active === "work"
                    ? "text-[#0c0e1b] bg-[#fe6f6b]"
                    : undefined
                }
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={
                  executing.active === "short"
                    ? "text-[#0c0e1b] bg-[#fe6f6b]"
                    : undefined
                }
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={
                  executing.active === "long"
                    ? "text-[#0c0e1b] bg-[#fe6f6b]"
                    : undefined
                }
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={settingsBtn} />
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-60 w-60 rounded-[7.5rem] text-[#efefef] bg-[#151932] text-[3.5rem] shadow-[1rem_1.5rem_2rem_#00000099]">
              <CountdownAnimation
                keyValue={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {childrenAnimate}
              </CountdownAnimation>
            </div>
          </div>
          <div className="flex items-center justify-center p-8">
            <Button
              title="Start"
              activeClass={
                !startAnimate
                  ? "text-[#0c0e1b] bg-[#c9ccea] border border-[#0c0e1b]"
                  : undefined
              }
              _callback={startTimer}
            />
            <Button
              title="Pause"
              activeClass={
                startAnimate
                  ? "text-[#0c0e1b] bg-[#c9ccea] border border-[#0c0e1b]"
                  : undefined
              }
              _callback={pauseTimer}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PomodoroMain;
