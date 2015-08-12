var http = require('http');

http.get("http://www.google.com/", function(res) {
  console.log("Got response: " + res.statusCode);
	foreach(var i in res) {
	  console.log(i + ': " +  res[i]);
	}
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});