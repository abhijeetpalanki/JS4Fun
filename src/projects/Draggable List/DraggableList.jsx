import { useState, useEffect } from "react";
import { img1, img2, img3, img4, img5, img6 } from "./images";
import { MdDragIndicator } from "react-icons/md";

const DraggableList = () => {
  const [items] = useState([
    { src: img1, name: "Kristina Zasiadko", dragging: false },
    { src: img2, name: "Gabrielle Wilson", dragging: false },
    { src: img3, name: "Ronelle Casicon", dragging: false },
    { src: img4, name: "James Khosravi", dragging: false },
    { src: img5, name: "Annika Hayden", dragging: false },
    { src: img6, name: "Donald Horton", dragging: false },
  ]);

  useEffect(() => {
    const sortableList = document.querySelector(".sortable-list");
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
      });
    });

    sortableList.addEventListener("dragover", (e) => {
      e.preventDefault();
      const draggingItem = sortableList.querySelector(".dragging");
      const siblings = [
        ...sortableList.querySelectorAll(".item:not(.dragging)"),
      ];

      let nextSibling = siblings.find((sibling) => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
      });

      sortableList.insertBefore(draggingItem, nextSibling);
    });

    sortableList.addEventListener("dragenter", (e) => e.preventDefault());
  }, []);
  return (
    <div className="flex items-center justify-center h-screen font-['Poppins']">
      <ul className="bg-white w-[445px] pt-[30px] px-[25px] pb-[20px] rounded-md sortable-list">
        {items.map((item, idx) => (
          <li
            className="item flex items-center justify-between border border-[#ccc] mb-[11px] py-[10px] px-[13px] rounded-[5px] hover:cursor-move"
            draggable
            key={idx}
          >
            <div className="flex items-center details">
              <img
                className="w-[43px] h-[43px] object-cover rounded-full mr-3"
                src={item.src}
                alt="1"
              />
              <span className="text-[1.13rem]">{item.name}</span>
            </div>
            <MdDragIndicator color="#474747" className="text-[1.13rem]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraggableList;
