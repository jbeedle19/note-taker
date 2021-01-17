// Routes to html pages below
// GET /notes should return notes.html
// GET * should return index.html
const path = require('path');
const router = require('express').Router();

// Route for index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;