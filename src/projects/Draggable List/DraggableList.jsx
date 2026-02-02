import { useState } from "react";
import { data, statuses } from "./data";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropWrapper from "./DropWrapper";
import Column from "./Column";
import Item from "./Item";

const DraggableList = () => {
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <div className="flex flex-col items-center md:justify-center xl:h-screen bg-gradient-to-b from-[#0049bf] via-[#bebeff] to-[#00d4ff] text-[#172b4d]">
      <DndProvider backend={HTML5Backend}>
        {/* Header */}
        <div className="flex justify-center">
          <p className="bg-[#054f7c] p-5 text-white text-3xl flex-[1_100%] mt-0 text-center my-[10px] break-words">
            Draggable List 🗂️
          </p>
        </div>

        {/* Main */}
        <div className="flex flex-col justify-center xl:flex-row">
          {statuses.map((s) => {
            return (
              <div
                key={s.status}
                className="flex flex-col m-5 p-5 bg-[#f5eaea] rounded-[5px]"
              >
                <h2 className="mt-0 mb-5 text-xl font-semibold">
                  {s.status.toUpperCase()}
                </h2>
                <DropWrapper onDrop={onDrop} status={s.status}>
                  <Column>
                    {items
                      .filter((i) => i.status === s.status)
                      .map((i, idx) => (
                        <Item
                          key={i.id}
                          item={i}
                          index={idx}
                          moveItem={moveItem}
                          status={s}
                        />
                      ))}
                  </Column>
                </DropWrapper>
              </div>
            );
          })}
        </div>
      </DndProvider>
    </div>
  );
};

export default DraggableList;
