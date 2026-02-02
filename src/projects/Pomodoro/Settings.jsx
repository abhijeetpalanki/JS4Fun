import { useState } from "react";
import Button from "./Button";
import { SettingsContext } from "./SettingsContext";
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
      default:
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
            className="h-25 w-25 pl-0 md:pl-4 bg-[#0c0e1b] text-[#c9ccea] border-none rounded-full mr-[0.3rem] text-center text-4xl"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            type="number"
            className="h-25 w-25 pl-0 md:pl-4 bg-[#0c0e1b] text-[#c9ccea] border-none rounded-full mr-[0.3rem] text-center text-4xl"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            type="number"
            className="h-25 w-25 pl-0 md:pl-4 bg-[#0c0e1b] text-[#c9ccea] border-none rounded-full mr-[0.3rem] text-center text-4xl"
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
