// var express = require('express');
// var path = require('path');
// var async = require('async');
var email = require('emailjs');
// var app =  express();

// var emailServer  = email.server.connect({
   // user:"bensacola@gmail.com", 
   // password: process.env.MAIL_PASS, 
   // host:"smtp.gmail.com"
	 // ,port:465
   // ,ssl:true
	 // //,port:587
	 // //,tls:true
// });
var email = require('emailjs');

var server = email.server.connect({
  user: 'nodejsiscool@gmail.com',
  password: 'stackoverflow',
  host: 'smtp.gmail.com',
  ssl: true
});

server.send({
  text: 'Hey howdy',
  from: 'NodeJS',
  to: 'Wilson <wilson.balderrama@gmail.com>',
  cc: '',
  subject: 'Greetings'
}, function (err, message) {
  console.log(err || message);
});


// app.get('/', function(request, response) {
	// response.send("What");
// });

// app.get("/ping", function(request, response) {
	// response.json('pong');
// });

// app.get('/time', function(request, response) {
	// response.send(new Date());
// });

// app.get('/email',function(request, response) {
	 // console.log('sending email');
	// // send the message and get a callback with an error or details of the message that was sent
	// var message = {
		 // text:    "i hope this works", 
		 // from:    "benronan@cox.net", 
		 // to:      "benronan@cox.net",
		 // subject: "testing emailjs"
	// }
	// emailServer.send(message, function(err, message) {
		// if(err) {
			// console.log(err); 
		// }
		// else {
			// console.log('send success');
		// }
		// });
	
	// console.log('email sending');
	// response.send('email sent');
// });

// app.get('/*', function(request, response) {
	// response.redirect('/');
// });

// var server = app.listen(4351, function() {
  // var host = server.address().address;
	// var port = server.address().port;
	// console.log('Server listening at http://%s:%s', host, port);
// });


