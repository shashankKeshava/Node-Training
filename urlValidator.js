var http = require("http");

var hostname = 'localhost';
var port = 8000;

var server = http.createServer(function(req, res) {
    if (req.method == 'GET') {
        if (req.url == '/home') {
            res.write('<html><body><h1>Welcome to Home</h1></body></html>');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Error 404: ' + req.method +
            ' not supported</h1></body></html>');
    }
})
server.listen(port);
