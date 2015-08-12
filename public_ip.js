require('http').request({
    hostname: 'fugal.net',
    path: '/ip.cgi',
    agent: false
    }, function(res) {
    if(res.statusCode != 200) {
        throw new Error('non-OK status: ' + res.statusCode);
    }
    res.setEncoding('utf-8');
    var ipAddress = '';
    res.on('data', function(chunk) { ipAddress += chunk; });
    res.on('end', function() {
			  console.log(ipAddress);
        // ipAddress contains the external IP address
    });
    }).on('error', function(err) {
    throw err;
}).end();