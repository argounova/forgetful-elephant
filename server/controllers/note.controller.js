const Note = require('../models/note.model');
const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const noteData = await Note.create({
      title: req.body.title,
      content: req.body.content
    });
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const noteData = await Note.findByPk(req.params.id);
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const noteData = await Note.findAll();
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const noteData = await Note.findByPk(req.params.id);
    if(req.body.title) {
      noteData.title = req.body.title;
    }
    if(req.body.content) {
      noteData.content = req.body.content;
    }
    await noteData.save();
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const noteData = await Note.findByPk(req.params.id);
    await noteData.destroy();
    res.status(200).json('Note successfully deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;