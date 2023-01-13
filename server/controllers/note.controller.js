const Note = require('../models/Note');

exports.create = (req, res) => {  
  if (!req.body.title) {
    res.status(400).send({
      message: 'Note title is required!'
    });
    return;
  }

  const note = {
    title: req.body.title,
    content: req.body.content
  };

  Note.create(note)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Unable to create note.'
      });
    });
};

// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
  
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };

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

// router.post('/', async (req, res) => {
//   try {
//     const noteData = await Note.create(req.body);
//     res.status(200).json(noteData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

// module.exports = router;