var express = require('express');
var path = require('path');
var async = require('async');
var email = require('emailjs');
var app =  express();

console.log('process.env.MAIL_USER: ' + process.env.MAIL_USER);
console.log('process.env.MAIL_PASS: ' + process.env.MAIL_PASS ? 'set' : 'undefined');


var emailServer  = email.server.connect({
	user: process.env.MAIL_USER, 
	password: process.env.MAIL_PASS, 
	host:"smtp.cox.net"
	,port:465
	,ssl:true
	//,port:587
	//,tls:true
});

app.get('/', function(request, response) {
 response.send("What");
});

app.get("/ping", function(request, response) {
 response.json('pong');
});

app.get('/time', function(request, response) {
 response.send(new Date());
});

app.get('/email',function(request, response) {
	console.log('sending email');
 var message = {
		text:    "can you hear me now?", 
		from:    "benronan@cox.net", 
		to:      "freestylsurfr@cox.net",
		subject: "testing emailjs"
 }
 emailServer.send(message, function(err, message) {
	 if(err) {
		 console.log(err); 
	 }
	 else {
		 console.log('send success');
	 }
	 });

 console.log('email sending');
 response.send('email sent');
});

app.get('/*', function(request, response) {
 response.redirect('/');
});

var server = app.listen(4351, function() {
 var host = server.address().address;
 var port = server.address().port;
 console.log('Server listening at http://%s:%s', host, port);
});


