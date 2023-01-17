const Note = require('../models/Note');
const router = require('express').Router();


// module.exports = {
//   async create(req, res) {
//     try {
//       const data = await Note
//         .create(req.body);
//       return res.status(200).json(data);
//     } catch (err) {
//       return res.status(500).json(err);
//     }
//   },
// };

// exports.findAll = (req, res) => {
// exports.findOne = (req, res) => {
// exports.update = (req, res) => {
// exports.delete = (req, res) => {
// exports.deleteAll = (req, res) => {
// exports.findAllPublished = (req, res) => {

// router.get('/', async (req, res) => {
//   try {
//     const noteData = await Note.findAll();
//     res.status(200).json(noteData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const noteData = await Note.findByPk(req.params.id);
//     const note = noteData.get({ plain: true });
//     console.log(note);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

// router.put('/', async (req, res) => {
//   try {
//     const noteData = await Note.findByPk(req.params.id);
//     if(req.body.note_title) {
//       noteData.note_title = req.body.note_title;
//     }
//     if(req.body.note_content) {
//       noteData.note_content = req.body.note_content;
//     }
//     await noteData.save();
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const noteData = await Note.destroy(req.params.id);
//     res.status(200).json(noteData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;