// add variable for modules
const express = require("express");
const path = require("path");

// set variable for express and PORT
const app = express();
const PORT = process.env.PORT || 3000;


// set paths to the public folder
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/api')(app);
require('./routes/html')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});