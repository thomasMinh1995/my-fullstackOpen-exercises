import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'http://localhost:3001/', // Adjust according to your client origin
  methods: ['GET', 'POST', 'DELETE']
}));

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((item) => item.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(400).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  };

  notes = notes.concat(note);
  response.json(note);
});


//toggle important
app.patch('/api/notes/:id', (request, response) => {
  const {important} = request.body;
  const {id} = request.params;

  if(typeof important !== 'boolean') {
    return response.status(400).json({
      error : 'Invalid important status'
    })
  }

  const note = notes.find((note) => note.id === id);
  if(!note) {
    return response.status(404).json({ error: 'Note not found' }); 
  }

  note.important = important;
  response.json(note);
})

//TODO: update note
app.put('/api/notes/:id', (request, response) => {
  const  {id} = request.params;
  const {important, content} = request.body;

  const  noteUpdate = notes.find((note) => note.id === id);

  if(!noteUpdate) {
    return response.status(404).json({ error: 'Note not found' }); 
  }
  
  noteUpdate.important = important;
  noteUpdate.content = content;
  response.json(noteUpdate)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log("listen" + PORT);
});
