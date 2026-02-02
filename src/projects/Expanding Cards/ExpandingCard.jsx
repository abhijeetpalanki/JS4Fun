import { useState } from "react";
import { data } from "./data";

const ExpandingCard = () => {
  const [panels, setPanels] = useState(data);
  const togglePanel = (id) => {
    const newState = [...panels];

    newState.map((item) =>
      item.id === id ? (item.active = true) : (item.active = false),
    );
    setPanels(newState);
  };

  return (
    <div className="flex justify-center items-center h-[80vh] overflow-hidden">
      <div className="flex w-screen sm:w-full">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`transition-[flex] duration-700 ease-in bg-cover bg-center bg-no-repeat h-[70vh] rounded-[50px] text-white cursor-pointer flex-[0.5] m-2.5 relative ${
              panel.active && "flex-[5] group"
            }`}
            style={{
              backgroundImage: `url(${panel.image})`,
            }}
            onClick={() => togglePanel(panel.id)}
          >
            <h3 className="text-[24px] absolute bottom-6 left-5 m-0 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300 group-hover:ease-in">
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCard;
