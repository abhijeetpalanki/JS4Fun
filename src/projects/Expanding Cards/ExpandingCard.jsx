import React, { useState } from "react";
import "./ExpandingCard.css";
import { data } from "./data";

const ExpandingCard = () => {
  const [panels, setPanels] = useState(data);
  const togglePanel = (id) => {
    const newState = [...panels];

    newState.map((item) =>
      item.id === id ? (item.active = true) : (item.active = false)
    );
    setPanels(newState);
  };

  return (
    <div className="expanding-card-body font-['Muli'] flex justify-center items-center h-[80vh] overflow-hidden">
      <div className="container flex">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`panel bg-cover bg-center bg-no-repeat h-[70vh] rounded-[50px] text-white cursor-pointer flex-[0.5] m-[10px] relative ${
              panel.active && "active"
            }`}
            style={{
              backgroundImage: `url(${panel.image})`,
            }}
            onClick={() => togglePanel(panel.id)}
          >
            <h3 className="text-[24px] absolute bottom-6 left-5 m-0 opacity-0">
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCard;
