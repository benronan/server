"use strict";

var emailjs = require('emailjs');


function Email(userName, password, host) {
	this.userName = userName;
	this.password = password;	
	this.host = host;
	
	console.log('Connecting to email server @ ' + this.host);
	this.emailServer = emailjs.server.connect({
		user: this.userName, 
		password: this.password, 
		host: this.host,
		port:465,
		ssl:true
	});
	//console.log('Connected to email server @ ' + this.host);
	
	this.send = function sendEmail(emailMessage) {
		
		// var message = {
			// text:    email.body, 
			// from:    email.from || email.emailAddress, 
			// to:      email.to,
			// subject: email.subject
		// };
		
		console.log('Sending email to ' + emailMessage.to);
		this.emailServer.send(emailMessage, function(err, message) {
			if(err) {
				console.log("Error sending email: " + err); 
			}
			else {
				console.log('Email sent: ' + message);
			}
		});
	};
};

module.exports = Email;
