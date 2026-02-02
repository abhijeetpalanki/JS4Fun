import { useState, useReducer } from "react";
import brickWallImg from "./brick-wall.jpg";
import postItNoteImg from "./post-it-note.png";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

const initialNotesState = {
  lastNoteCreated: null,
  totalNotes: 0,
  notes: [],
};

const notesReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      const newState = {
        lastNoteCreated: new Date().toTimeString().slice(0, 8),
        totalNotes: prevState.notes.length + 1,
        notes: [...prevState.notes, action.payload],
      };

      return newState;
    }

    case "DELETE_NOTE": {
      const newState = {
        ...prevState,
        totalNotes: prevState.notes.length - 1,
        notes: prevState.notes.filter((note) => note.id !== action.payload.id),
      };

      return newState;
    }
    default:
      return;
  }
};

const StickyNotes = () => {
  const [noteInput, setNoteInput] = useState("");
  const [notesState, dispatch] = useReducer(notesReducer, initialNotesState);

  const addNote = (e) => {
    e.preventDefault();

    if (!noteInput) {
      return;
    }

    const newNote = {
      id: Math.floor(Math.random() * Date.now()),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20),
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
    setNoteInput("");
  };

  const dragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const dropNote = (event) => {
    event.target.style.left = `${event.pageX - 50}px`;
    event.target.style.top = `${event.pageY - 50}px`;
  };

  return (
    <div
      className="sticky-notes-body h-screen bg-cover p-[50px] from-black/60 to-black/60"
      style={{ backgroundImage: `url('${brickWallImg}')` }}
      onDragOver={dragOver}
    >
      <h1 className="text-white text-[2rem]">
        Sticky Notes ({notesState.totalNotes})
        <span className="block text-white text-[14px] italic h-[14px]">
          {notesState.totalNotes > 0
            ? `Last Note Created: ${notesState.lastNoteCreated}`
            : ""}
        </span>
      </h1>
      <form
        className="note-form flex flex-col w-[200px] mt-[15px]"
        onSubmit={addNote}
      >
        <textarea
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Create a new note..."
          className="min-w-full h-[100px] p-[10px] outline-none text-black"
        ></textarea>
        <button className="add w-full bg-[#fff27f] p-[10px] border-0 outline-none flex justify-center items-center text-black hover:bg-[tomato] hover:text-white">
          <FaPlus /> Add
        </button>
      </form>

      {notesState.notes.map((note) => (
        <div
          className="note absolute bg-cover top-[100px] left-[300px] w-[200px] h-[200px] p-[20px]"
          style={{
            transform: `rotate(${note.rotate}deg)`,
            backgroundImage: `url('${postItNoteImg}')`,
          }}
          draggable="true"
          onDragEnd={dropNote}
          key={note.id}
        >
          <div
            className="h-[15px] w-[15px] text-black absolute right-[15px] top-[15px] transition-[transform] duration-[0.3s] ease-in-out hover:scale-[1.6]"
            onClick={() => dispatch({ type: "DELETE_NOTE", payload: note })}
          >
            <FaTrashAlt />
          </div>
          <pre className="w-full h-full overflow-y-scroll text-black whitespace-pre-wrap text">
            {note.text}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default StickyNotes;
