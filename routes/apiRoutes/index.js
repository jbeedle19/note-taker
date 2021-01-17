// Routes to json data

// Requirements
const router = require('express').Router();
const { 
    findById,
    createNewNote,
    validateNote,
} = require('../../lib/notes');
const { notes } = require('../../db/db.json');

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
    // req.body is wher our incoming content will be
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

// DELETE route for deleting a note
router.delete('/notes/:id', (req, res) => {
    console.log('you are trying to delete');
});

// BONUS
// DELETE route for deleting a note
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
// In order to delete a note, you'll need to read all notes from the db.json file, remove the note 
// with the given id property, and then rewrite the notes to the db.json file.

module.exports = router;