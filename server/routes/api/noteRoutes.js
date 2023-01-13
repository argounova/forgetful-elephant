const router = require('express').Router();
const Note = require('../../models/Note');

// GET all notes
router.get('/', async (req, res) => {
  try {
    const noteData = await Note.findAll();
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single note
router.get('/:id', async (req, res) => {
  try {
    const noteData = await Note.findByPk(req.params.id);
    const note = noteData.get({ plain: true });
    console.log(note);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a note
router.post('/', async (req, res) => {
  try {
    const noteData = await Note.create(req.body);
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a note
router.put('/', async (req, res) => {
  try {
    const noteData = await Note.findByPk(req.params.id);
    if(req.body.note_title) {
      noteData.note_title = req.body.note_title;
    }
    if(req.body.note_content) {
      noteData.note_content = req.body.note_content;
    }
    await noteData.save();
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a note
router.delete('/:id', async (req, res) => {
  try {
    const noteData = await Note.destroy(req.params.id);
    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;