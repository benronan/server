var http = require('http');

var server1 = "http://jsonip.com/";
http.get(server1, function(res) {
	 res.on('data', function (chunk) {
		 var json = JSON.parse(chunk)
		 var ip = json["ip"];
		 console.log('ip: ' + ip);
   });
 }).on('error', function(e) {
		console.log('Failed to contact server (' + server1 +'): ' + e.message);
 });

var server2 = "http://ip-api.com/json";
http.get(server2, function(res) {
	res.on('data', function (chunk) {
		var json = JSON.parse(chunk)
		console.log('ip: ' + json["query"]);
		console.log('city: ' + json["city"]);
		console.log('state: ' + json["regionName"]);
		console.log('zipcode: ' + json["zip"]);
		console.log('country: ' + json["ip"]);
		console.log('coords: ' + json["lat"] + ' , ' + json["lon"]);
  });
}).on('error', function(e) {
  console.log('Failed to contact server (' + server2 +'): ' + e.message);
});
