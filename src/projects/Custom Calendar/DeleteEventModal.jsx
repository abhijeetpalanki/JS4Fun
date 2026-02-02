import React from "react";

const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return (
    <>
      <div className="z-20 p-[25px] bg-[#e8f4fa] [box-shadow:0_0_3px_black] rounded-[5px] w-[350px] top-[100px] absolute left-[calc(50%-175px)]">
        <h2 className="mb-3 text-2xl font-bold tracking-widest">Event</h2>

        <p id="eventText" className="mb-3 text-sm">
          {eventText}
        </p>

        <button
          id="deleteButton"
          onClick={onDelete}
          className="bg-[#d36c6c] mx-[2.5px] w-[75px] shadow-[0_0_2px_gray] border-none outline-none p-[5px] rounded-[5px] text-white"
        >
          Delete
        </button>
        <button
          id="cancelButton"
          onClick={onClose}
          className="bg-[#92a1d1] mx-[2.5px] w-[75px] shadow-[0_0_2px_gray] border-none outline-none p-[5px] rounded-[5px] text-white"
        >
          Close
        </button>
      </div>

      <div
        id="modalBackdrop"
        className="absolute top-0 left-0 z-10 w-screen h-screen bg-black/80"
      ></div>
    </>
  );
};

export default DeleteEventModal;
