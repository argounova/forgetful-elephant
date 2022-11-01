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
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

// API Routes
app.get('/api/notes', (req, res) => {
    readFromFile('./Develop/db/notes.json').then((data) => res.json(JSON.parse(data)));
});
app.post('/api/notes', (req, res) => {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      note_id: uuid.v4(),
    }
    // if(!newNote.title || !newNote.text) {
    //   return res.status(400).json({msg: 'Please include a note and title'});
    // }
    readAndAppend(newNote, './Develop/db/notes.json');
      const response = {
        status: 'success',
        body: newNote,
      };
      res.json(response);
    }
);

// File functions
const readFromFile = util.promisify(fs.readFile);
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
);
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
  console.log(`Server running on port ${PORT}...`)
);