var express = require('express'),
	fs = require('fs');
var app = express();

var quotes = [
	{ author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
	{ author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
	{ author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
	{ author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

app.get('/', function(req, res) {
	fs.readFile('index.html', function(error, html) {
		if (error) {
			throw error;
		}
		res.setHeader('Content-Type', 'text/html');
		res.send(html);
	});
	//res.render('index', {});
});

app.get('/quote/random', function(req, res) {
	var id = Math.floor(Math.random() * quotes.length);
	var q = quotes[id];

	res.setHeader('Content-Type', 'application/json');
	res.json(q);
});

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
