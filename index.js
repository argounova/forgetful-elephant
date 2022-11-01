const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const uuid = require('uuid');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Routes
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// API Routes
app.get('/api/notes', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});
app.post('/api/notes', (req, res) => {
    const {title, text} = req.body;
    if (title && text) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
    readAndAppend(newNote, './db/notes.json');
      const response = {
        status: 'success',
        body: newNote,
      };
      res.json(response);
    } else {
      res.json('Unable to add new note');
    }
});

// File functions
const readFromFile = util.promisify(fs.readFile);
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);