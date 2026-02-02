import { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";

const ITEM_TYPE = "ITEM";

const Item = ({ item, index, moveItem, status }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  drag(drop(ref));

  return (
    <>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className="text-[15px] mb-2.5 p-2.5 rounded-[5px] z-1 bg-white hover:cursor-pointer"
        onClick={onOpen}
      >
        <div
          className="w-10 h-2.5 rounded-[5px]"
          style={{ backgroundColor: status.color }}
        ></div>
        <p className="text-base font-semibold my-2.5 wrap-break-word text-left">
          {item.content}
        </p>
        <p className="text-right my-2.5 wrap-break-word">{item.icon}</p>
      </div>

      <Window item={item} onClose={onClose} show={show} />
    </>
  );
};

export default Item;
