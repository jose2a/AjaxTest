var express = require('express'), // Importing express framework
	fs = require('fs'); // Importing fs (allows reading a file from the HD)

var app = express(); // Creating an express object

// Array of authors and quotes that will be sent to the user
var quotes = [
	{ author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
	{ author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
	{ author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
	{ author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

/* 
 * Defining the entry point for the application,
 * in this part a html file will be read from the disc and send it to the browser
 * as a reponse.
 */
app.get('/', function(req, res) {
	// Reading the filed
	fs.readFile('index.html', function(error, html) {
		if (error) {
			throw error;
		}
		res.setHeader('Content-Type', 'text/html');
		res.send(html); // Sending the file
	});
});

/*
 * This function will be called by using AJAX to get a random quote and will be sent
 * to the user using JSON format, so it can be handle by the client.
 */
app.get('/quote/random', function(req, res) {

	var id = Math.floor(Math.random() * quotes.length); // Choosing randomly an element from the quotes array
	var q = quotes[id]; // Getting the quote that will be sent

	res.setHeader('Content-Type', 'application/json'); // Setting the headers
	res.json(q); // Sending the json response to the client
});

// Launching the application
app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
