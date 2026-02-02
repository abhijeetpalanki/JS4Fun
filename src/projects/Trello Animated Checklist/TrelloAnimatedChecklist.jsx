import { stagger, useAnimate } from "framer-motion";
import { useState } from "react";
import { MdFormatListBulleted } from "react-icons/md";

const TrelloAnimatedChecklist = () => {
  let [items, setItems] = useState([
    { id: "1", text: "One", checked: true },
    { id: "2", text: "Two", checked: true },
    { id: "3", text: "Three", checked: true },
    { id: "4", text: "Four", checked: false },
    { id: "5", text: "Five", checked: true },
    { id: "6", text: "Six", checked: true },
    { id: "7", text: "Seven", checked: true },
  ]);

  let [ref, animate] = useAnimate();

  const handleChange = (id) => {
    let newItems = items.map((item) => ({
      ...item,
      checked: item.id === id ? !item.checked : item.checked,
    }));

    setItems(newItems);

    if (newItems.every((item) => item.checked)) {
      let lastCompletedItem = items.findIndex((item) => !item.checked);
      let random = Math.random();

      if (random < 1 / 3) {
        animate(
          "input",
          { scale: [1, 1.25, 1] },
          {
            duration: 0.35,
            delay: stagger(0.075, { from: lastCompletedItem }),
          }
        );
      } else if (random < 2 / 3) {
        animate(
          "input",
          { x: [0, 2, -2, 0] },
          {
            duration: 0.4,
            delay: stagger(0.1, { from: lastCompletedItem }),
          }
        );
      } else {
        animate(
          "input",
          { rotate: [0, 10, -10, 0] },
          {
            duration: 0.5,
            delay: stagger(0.1, { from: lastCompletedItem }),
          }
        );
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600">
      <div className="flex flex-col w-full max-w-sm px-3 py-4 bg-gray-100 rounded shadow-xl">
        <p className="flex items-center ml-2 text-lg font-semibold text-gray-700">
          <MdFormatListBulleted className="w-5 h-5 mr-3" />
          Trello's Animated Checklist
        </p>

        <div ref={ref} className="mt-4">
          {items.map((item) => (
            <label
              key={item.id}
              className={`group flex w-full cursor-pointer select-none items-center rounded p-2 text-sm font-medium transition-colors duration-300 checked:text-gray-300 hover:bg-gray-200 ${
                item.checked ? "text-gray-400 line-through" : "text-gray-800"
              }`}
            >
              <input
                onChange={() => handleChange(item.id)}
                checked={item.checked}
                type="checkbox"
                className="w-4 h-4 mr-4 transition-colors duration-300 border-2 border-gray-300 rounded-sm text-sky-600 focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-sky-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 group-active:border-sky-600 group-active:checked:text-sky-600/25"
              />
              {item.text}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrelloAnimatedChecklist;
