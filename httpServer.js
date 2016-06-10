console.log("starting  ... 8000\n");
// ------------------------
var http = require("http");
var server = http.createServer(function(request, response) {
    response.write("<html> Hello <em>HTTP!</em></html>");
    response.end();
});
server.listen(8000);
