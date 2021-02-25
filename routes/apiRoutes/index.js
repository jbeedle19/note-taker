// Routes to json data

// Requirements
const router = require('express').Router();
const { 
    findById,
    createNewNote,
    validateNote,
    deleteNote,
} = require('../../lib/notes');
let { notes } = require('../../db/db.json');

// GET route for showing the notes on lefthand side
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// GET route for showing note based on id
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// POST route for posting a new note to the server
router.post('/notes', (req, res) => {
    // req.body is where our incoming content will be
    // Set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // Check validation, if valid add note, if not alert user
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted!');
    } else {
        // Add note to json file and notes array in this function
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

// BONUS
// DELETE route for deleting a note
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    notes = deleteNote(id, notes);
    if (notes) {
        console.log(notes);
        res.json(notes);
    } else {
        res.send(404);
    }
});

module.exports = router;