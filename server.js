// Create the server here

// Requirements
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Instructs the server to make certain files readily available
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}!`);
});