import { useState } from "react";

const NewEventModal = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <div className="z-20 p-[25px] bg-[#e8f4fa] shadow-[0_0_3px_black] rounded-[5px] w-[350px] top-[100px] absolute left-[calc(50%-175px)]">
        <h2 className="mb-3 text-2xl font-bold tracking-widest">New Event</h2>

        <input
          type="text"
          className={`p-[10px] w-full box-border mb-[25px] rounded-[3px] outline-none border-none shadow-[0_0_3px_gray] ${
            error ? "border-2 border-red-500" : ""
          }`}
          id="eventTitleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
        />

        <button
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }}
          id="saveButton"
          className="bg-[#92a1d1] mx-[2.5px] w-[75px] shadow-[0_0_2px_gray] border-none outline-none p-[5px] rounded-[5px] text-white"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          id="cancelButton"
          className="bg-[#d36c6c] mx-[2.5px] w-[75px] shadow-[0_0_2px_gray] border-none outline-none p-[5px] rounded-[5px] text-white"
        >
          Cancel
        </button>
      </div>

      <div
        id="modalBackdrop"
        className="absolute top-0 left-0 z-10 w-screen h-screen bg-black/80"
      ></div>
    </>
  );
};

export default NewEventModal;
