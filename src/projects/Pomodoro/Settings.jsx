import React, { useState } from "react";
import Button from "./Button";
import { SettingsContext } from "./../../context/SettingsContext";
import { useContext } from "react";

const Settings = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: "work",
  });
  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="text-center">
      <form noValidate>
        <div className="m-6">
          <input
            type="number"
            className="h-[100px] w-[100px] pl-4 bg-[#0c0e1b] text-[#c9ccea] border-none rounded-[50%] mr-[0.3rem] text-center text-sm"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            type="number"
            className="h-[100px] w-[100px] pl-4 bg-[#0c0e1b] text-[#c9ccea] border-none rounded-[50%] mr-[0.3rem] text-center text-sm"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            type="number"
            className="h-[100px] w-[100px] pl-4 bg-[#0c0e1b] text-[#c9ccea] border-none rounded-[50%] mr-[0.3rem] text-center text-sm"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>

        <Button title="Set Timer" _callback={handleSubmit} />
      </form>
    </div>
  );
};

export default Settings;
