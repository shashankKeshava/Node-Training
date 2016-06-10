console.log("starting  ...8000\n");
// ------------------------
// on browser: http://localhost:8000?key1=123&addr=" 1, MG Rd" 

var http = require("http");
var connect = require("connect");
var app = connect();
var query = require('connect-query');


/*
function middleware(request, response, next) {
	return next();
}
*/

//  Chaining Together Multiple Pieces of 
//Connect Middleware, (by calling use()).

app.use(query());

app.use(function(request, response, next) {
    var query = request.query;
    for (q in query) {
        console.log(q + ' = ' + query[q]);
    }
    next();
});
app.use(function(request, response, next) {
    response.setHeader("Content-Type", "text/html");
    response.end("Using the protocol: <strong>HTTP</strong>!");
});
http.createServer(app).listen(8000);
