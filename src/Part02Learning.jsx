import React from "react";

const Note = (prop) => {
  return (
    <p>{prop.content}</p>
  )
}

export default function Part02Learning() {
  const notes = [
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
  ];

  return (
    <div>
      {notes.map((note) => (
        // <p key={note.id}>{note.content}</p>
        <Note key={note.id} content={note.content}/>
      ))}
    </div>
  );
}
