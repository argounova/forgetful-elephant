const notes = require('../controllers/note.controller');
// const router = require('express').Router();

module.exports = app => {
    app.post('/api/notes', notes.create);
    // app.use('/api/notes', router);
};