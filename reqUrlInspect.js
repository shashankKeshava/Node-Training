console.log("starting server...8000");

var util = require('util');
require('http').createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Displaying the hdr content:</h1> <br>")
    res.end(util.inspect(req.headers));
    console.log("req.headers = " + util.inspect(req.headers));
    console.log("req.url= " + util.inspect(req.url));
}).listen(8000);
