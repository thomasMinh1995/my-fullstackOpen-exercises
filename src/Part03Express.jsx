import React, { useEffect, useState } from "react";
import noteService from "./services/notes";

// TODO: update note
// TODO: router note detail and update it
// TODO: after update, redirect to the main pages


export default function Part03Express() {
  const [notes, setNotes] = useState([]);
  const [noteNew, setNoteNew] = useState("");

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handleChangeContent = (event) => {
    event.preventDefault();
    setNoteNew(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteObj = {
      content: noteNew,
      important: false,
    };

    noteService.create(noteObj).then((response) => {
      setNotes(notes.concat(response.data));
      setNoteNew("");
    });
  };

  const handleDelete = (id) => {
    noteService.delete(id).then(() => {
      setNotes(notes.filter((item) => item.id !== id));
    });
  };

  const handleToggleItem = (id) => {
    const note  = notes.find((note) => note.id === id);
    if (!note) {
      console.error('Note not found:', id);
      return;
    }
    const noteChange = {
      ...note,
      important: !note.important,
    };
    noteService.toggleImportant(id, noteChange).then(response => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    })
  }

  const handleDetail = (id) => {
    noteService.getDetail(id)
    .then(response => {
      // Use the response data here and alert it
      alert(JSON.stringify(response.data));
    })
    .catch(error => {
      // Handle any errors that occur
      console.error('Error fetching details:', error);
      alert('Failed to fetch details.');
    });
  }

  return (
    <>
      <div>Part03Express</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="content"
          onChange={handleChangeContent}
          value={noteNew}
        />
        <button type="submit">Save</button>
      </form>
      {notes.map((item) => (
        <p key={item.id}>
          {item.content}
          <button onClick={() => handleDetail(item.id)}>Get detail</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <button onClick={() => handleToggleItem(item.id)}>Change to `{item.important ? 'important' : 'not important'}`</button>
        </p>
      ))}
    </>
  );
}
