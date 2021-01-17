// Requirements
const fs = require('fs');
const path = require('path');

// Function to validate new notes
function validateNote(note) {
    if (!note.title) {
        return false;
    }
    if (!note.text) {
        return false;
    }
    return true;
}

// Function to create a new note
function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

// Add filter by query or find by id for DELETE method?

module.exports = {
    createNewNote,
    validateNote,
};