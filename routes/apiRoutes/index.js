// API routes below
// GET /api/notes should read teh db.json file and return all saved notes as JSON
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file,
// and then return the new note to the client. You'll need to find a way to give each not a unique id when
// it's saved (look into npm packages that could do this for you).

// Requirements
const router = require('express').Router();
const { notes } = require('../../db/db.json');

// GET route for showing the notes on lefthand side
router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results);
    res.json(results);
});

// STOPPED HERE, WORKING ON POSTING NEW NOTES
// POST route for posting a new note to the server
//router.post('/notes', (req, res) => {
    // req.body is wher our incoming content will be
    // Set id based on what the next index of the array will be
    //req.body.id = notes.length.toString();

    // ADD VALIDATION?
    // if any data in req.body is incorrect, send 400 error back
    // if (!validateNote(req.body)) {
    //    res.status(400).send('The note is not properly formatted!');
    //} else {
        // Add note to json file and notes array in this function
    //    const note = createNewNote(req.body, notes);
    //    res.json(note);
    //}
//});

// BONUS
// DELETE route for deleting a note
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
// In order to delete a note, you'll need to read all notes from the db.json file, remove the note 
// with the given id property, and then rewrite the notes to the db.json file.

module.exports = router;