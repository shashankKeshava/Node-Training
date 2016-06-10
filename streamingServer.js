var fs = require('fs');
console.log("starting server... port 4200");

require('http').createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type': 'video/mp4'});
    // var rs = fs.createReadStream('test.mp4');

    res.writeHead(200, { 'Content-Type': 'audio/mp3' });

    var rs = fs.createReadStream('/home/shashank/Downloads/Magic Sword - Uprising.mp3');
    console.log("streaming the data...");
    rs.pipe(res);

}).listen(4200);
