var http = require('http');

// http.get("http://jsonip.com/", function(res) {
  // console.log("Got response: " + res.statusCode);
	// res.on('data', function (chunk) {
		// var json = JSON.parse(chunk)
		// var ip = json["ip"];
		// console.log('ip: ' + ip);
  // });
// }).on('error', function(e) {
  // console.log("Got error: " + e.message);
// });

http.get("http://ip-api.com/json", function(res) {
  console.log("Got response: " + res.statusCode);
	res.on('data', function (chunk) {
		var json = JSON.parse(chunk)
		console.log('ip: ' + json["ip"]);
		console.log('city: ' + json["city"]);
		console.log('state: ' + json["regionName"]);
		console.log('zipcode: ' + json["zip"]);
		console.log('country: ' + json["ip"]);
		console.log('coords: ' + json["lat"] + ' , ' + json["lon"]);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
