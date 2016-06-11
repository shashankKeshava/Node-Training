console.log("server  ---> 4000");
// on the browser: http://localhost:4000/

var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
var fs = require('fs');
httpd.listen(4000);

function handler(req, res) {
    fs.readFile(__dirname + '/ex8_socketio_chat_client.html',
        function(err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading html');
            }
            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function(socket) {
    console.log("connection: evt cb");

    socket.on('clientMessage', function(content) {
        socket.emit('serverMessage', 'You said: ' + content);
        socket.broadcast.emit('serverMessage', socket.id + ' said: ' +
            content);
    });
});
