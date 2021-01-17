// Create the server here
const express = require("express");
// you can delete fs and path here but wait til you are finished just in case
//const fs = require('fs');
//const path = require('path');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Instructs the server to make certain files readily available
app.use(express.static("public"));

const { notes } = require("./db/db.json");

app.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}!`);
});
