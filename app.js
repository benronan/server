var express = require('express');
var path = require('path');
var Email = require('./email');
var app =  express();
var read = require('read');
var ip = require('./ip');

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
 readCredentials();
});

function readCredentials() {
	read({prompt: 'Email Address: '}, function(err, email) {
		process.env.EMAIL_USER = email;
		if(err) {
			console.log("");
			console.log("Error reading email user: "  + err);
			return;
		}
		read({prompt: 'Password: ', silent: true}, function(err,password) {
		  process.env.EMAIL_PASS = password;
			if(err) {
				console.log("");
				console.log("Error reading email password: "  + err);
				return;
			}
			console.log('getting ip address');
			ip.getPublicIP(function(err,ipAddress) {
				if(err) {
				  console.log(err);return;
				}
				console.log('ip address is ' + ipAddress);
				var email = new Email(process.env.EMAIL_USER,process.env.EMAIL_PASS,"smtp.cox.net");
email.send({
					subject: "PI IP Address",
					to: "benronan@cox.net",
					from: "benronan@cox.net",
					text: "My IP Address is " + ipAddress,
				});
				console.log('ip email sent');
			});
		});
	});	
};


