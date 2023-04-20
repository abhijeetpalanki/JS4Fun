import { cloneElement } from "react";
import { statuses } from "./data";
import { useDrop } from "react-dnd";

const ITEM_TYPE = "ITEM";

const DropWrapper = ({ onDrop, children, status }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    canDrop: (item, monitor) => {
      const itemIndex = statuses.findIndex((si) => si.status === item.status);
      const statusIndex = statuses.findIndex((si) => si.status === status);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="flex-[1_25%] w-full h-full">
      {cloneElement(children, { isOver })}
    </div>
  );
};

export default DropWrapper;
