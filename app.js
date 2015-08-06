var express = require('express');
var path = require('path');
var async = require('async');
var app =  express();

app.get('/', function(request, response) {
	response.send("What");
});

app.get("/ping", function(request, response) {
	response.json('pong');
});

app.get('/time', function(request, response) {
	response.send(new Date());
});

app.get('/*', function(request, response) {
	response.redirect('/');
});

var server = app.listen(4351, function() {
  var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
});

