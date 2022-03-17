import React from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

export default function NoteList({ notes, setNotes }) {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, { method: "DELETE" });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {notes.map((note) => (
        <div item key={note.id}>
          <NoteCard note={note} handleDelete={handleDelete} />
        </div>
      ))}
    </Masonry>
  );
}
