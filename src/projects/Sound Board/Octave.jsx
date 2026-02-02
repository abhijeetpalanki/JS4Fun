import Note from "./Note";

const Octave = ({ notes }) => {
  return (
    <div>
      {notes.map(({ note, color }) => (
        <Note note={note} key={note} color={color} />
      ))}
    </div>
  );
};

export default Octave;
