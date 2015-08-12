var http = require('http');

http.get("http://jsonip.com/", function(res) {
  console.log("Got response: " + res.statusCode);
	res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
		var json = JSON.parse(chunk)
		var ip = json["ip"];
		console.log('ip: ' + ip);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
