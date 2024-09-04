import React, { useState } from "react";

const Note = (prop) => {
  return <p>{prop.content}</p>;
};

export default function Part02Learning() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "HTML is easy",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true,
    },
  ]);

  const [newNote, setNewNote] = useState();

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    setNotes(notes.concat(noteObj));
    setNewNote('')
  }

  const handleChangeNewNote = (event) => {
    setNewNote(event.target.value)
    console.log('note new', newNote);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add note" value={newNote} onChange={handleChangeNewNote}/>
        <button>Save</button>
      </form>
      {notes.map((note) => (
        // <p key={note.id}>{note.content}</p>
        <Note key={note.id} content={note.content} />
      ))}
    </div>
  );
}
