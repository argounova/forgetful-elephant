const noteRoutes = require('../controllers/note.controller');
const router = require('express').Router();

router.use('/api/notes', noteRoutes);

module.exports = router;