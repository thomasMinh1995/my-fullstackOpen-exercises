// import React, { useState } from "react";

// const Note = (prop) => {
//   return <p>{prop.content}</p>;
// };

// export default function Part02Learning() {
//   // Filtering Displayed Elements
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       content: "HTML is easy",
//       important: true,
//     },
//     {
//       id: 2,
//       content: "Browser can execute only JavaScript",
//       important: false,
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       important: true,
//     },
//   ]);

//   const [newNote, setNewNote] = useState();

//   const [showAll, setShowAll] = useState(true);

//   const noteToShow = showAll ? notes : notes.filter(note => note.important === true)

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const noteObj = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: String(notes.length + 1),
//     }
//     setNotes(notes.concat(noteObj));
//     setNewNote('')
//   }

//   const handleChangeNewNote = (event) => {
//     setNewNote(event.target.value)
//     console.log('note new', newNote);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="add note" value={newNote} onChange={handleChangeNewNote}/>
//         <button>Save</button>
//       </form>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       {noteToShow.map((note) => (
//         // <p key={note.id}>{note.content}</p>
//         <Note key={note.id} content={note.content} />
//       ))}
//     </div>
//   );
// }

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import noteService from './services/notes'

const Note = ({ noteItem, toggleImportance }) => {
  const labelImportance = noteItem.important
    ? "mark as not important"
    : "mark as important";
  return (
    <>
      <p key={noteItem.id}>
        {noteItem.content} {labelImportance}
      </p>
      <button onClick={toggleImportance}>{labelImportance}</button>
    </>
  );
};

export default function Part02Learning() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    // axios.get("http://localhost:3001/notes").then((response) => {
    //   setNotes(response.data);
    // });
    noteService.getAll().then(response => {
      setNotes(response.data)
    })
  }, []);

  const handleContentChange = (event) => {
    event.preventDefault();
    setNewNote(event.target.value);
  };

  const handleAddNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      const data = response.data;
      setNewNote(notes.concat(data));
      setNotes("");
    });
  };

  const toggleImportance = (id) => {
    // console.log('event', event)
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(n => n.id === id);
    const noteChange = {
      ...note,
      important: !note.important,
    } 
    axios.put(url, noteChange).then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
  }

  return (
    <>
      <div>
        <form onSubmit={handleAddNote}>
          <input
            type="text"
            placeholder="name content"
            onChange={handleContentChange}
          />
          <button>Save</button>
        </form>
        {notes.map((item) => (
          <Note noteItem={item} key={item.id} toggleImportance={() => toggleImportance(item.id)}/>
        ))}
      </div>
    </>
  );
}
