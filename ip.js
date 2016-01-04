"use strict";

var http = require('http');
var os = require('os');

//get public facing ip
exports.getIP = function(callback) {
	var ifaces = os.networkInterfaces();
	Object.keys(ifaces).forEach(function (ifname) {
		//var alias = 0    ;
		ifaces[ifname].forEach(function (iface) {
	    if ('IPv4' !== iface.family || iface.internal !== false) {
				// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
	      return;
	    }

			callback(null, iface.address);
			// if (alias >= 1) {
				// // this single interface has multiple ipv4 addresses
				// console.log(ifname + ':' + alias, iface.address);
			// } else {
				// // this interface has only one ipv4 adress
				// console.log(ifname, iface.address);
			// }
			// alias++;
		});
	});
};

exports.getPublicIP = function(callback) {
	var server = "http://jsonip.com/";
	http.get(server, function(res) {
		 res.on('data', function (chunk) {
			 var json = JSON.parse(chunk)
			 var ip = json["ip"];
			 console.log('ip: ' + ip);
			 callback(null,ip);
		 });
	 })
	 .on('error', function(e) {
		  var error = 'Failed to contact server (' + server +'): ' + e.message;
			console.log(error);
		  callback(error);
		});
};
//GeoIp
exports.getGeoIP = function(callback) {
	var server = "http://ip-api.com/json";
	http.get(server, function(res) {
		res.on('data', function (chunk) {
			var json = JSON.parse(chunk)
			console.log('ip: ' + json["query"]);
			console.log('city: ' + json["city"]);
			console.log('state: ' + json["regionName"]);
			console.log('zipcode: ' + json["zip"]);
			console.log('country: ' + json["country"]);
			console.log('coords: ' + json["lat"] + ' , ' + json["lon"]);
			
			var ret = {
			  ip: json["query"],
				city: json["city"],
				state: json["regionName"],
				zipcode: json["zip"],
				country: json["country"],
				lat: json["lat"],
				lon: json["lon"],
			};
			callback(null, ret);
		});
	})
	.on('error', function(e) {
		  var error = 'Failed to contact server (' + server +'): ' + e.message;
			console.log(error);
		  callback(error);
	});
};

