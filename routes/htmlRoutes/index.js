// Routes to HTML pages

// Requirements
const path = require('path');
const router = require('express').Router();

// GET * should return index.html (QUESTION: What does this mean?)
// Route for index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;