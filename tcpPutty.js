console.log("starting  ...\n");
// ------------------------
var net = require("net");
var server = net.createServer(function(socket) {
    // handle connection
});

//To listen on a randomly selected port, pass 0 as the port argument. 

// server.listen(0, function() {
// 	var address = server.address();  // a random port is used.
// 	console.log("Listening on port " + address.port);
// 	// server.close();
// });

// alt. way
server.listen(8000);

//Error handling for error event EADDRINUSE
server.on("error", function(error) {
    if (error.code === "EADDRINUSE") {
        console.error('Port in use ');
    }
})

// do a telnet to this port no. >>  telnet localhost 8000
// e.g. use putty client.
