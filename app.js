var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost', function(err) {
	if(err) throw err;
	console.log('connected!');

	var app = express();
	app.get('/', function(req, res) {
		res.status(200).send('hello mongoose blog');
	})
	app.listen(3000, function() {
		console.log('now listening on http://localhost:3000');
	})
});