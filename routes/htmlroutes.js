const path = require('path');
const express = require('express');
const app = express.Router();


// module.exports = (app) => {
	//Main file for home page.
	app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
	//Send to notes page.
	app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
	//If no matching route, then go back to main page.
	app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
// };

module.exports = app;