// Routes to HTML pages

// Requirements
const path = require('path');
const router = require('express').Router();

// Route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// GET * should return index.html (catch all for entering the wrong/non-existent route)
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;