import React, { useEffect } from "react";
import CountdownAnimation from "./CountdownAnimation";
import Settings from "./Settings";
import { SettingsContext } from "./SettingsContext";
import { useContext } from "react";
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
  }, [executing, startAnimate]);

  return (
    <div
      className="font-['Roboto Mono'] text-[#c9ccea] flex flex-col items-center justify-center min-h-screen"
      style={{
        background: "rgb(39, 42, 85)",
        background: "radial-gradient(circle, #1e2140 0%, #151932 55%)",
      }}
    >
      <h1 className="text-[2.6rem] mb-[0.2rem]">Pomodoro</h1>
      <small>Be productive the right way.</small>

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
            <div className="flex items-center justify-center h-60 w-60 rounded-[7.5rem] text-[#efefef] bg-[#151932] text-[3.5rem] shadow-[1rem_1.5rem_2rem_rgba(0,0,0,0.6)]">
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
