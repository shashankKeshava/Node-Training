var http = require("http");
var fs = require("fs");
var path = require("path");

var hostname = 'localhost';
var port = 8000;

var server = http.createServer(function(req, res) {
    var fileUrl;
    if (req.method == 'GET') {
        if (req.url == '/home') {
            fileUrl = './vehicleTable.html';
        }
        //Using Path module to add absolute path
        var filePath = path.resolve('./public' + fileUrl);
        //Created a Read Stream and piped to res
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Error 404: ' + req.method +
            ' not supported</h1></body></html>');
    }
})
server.listen(port);
