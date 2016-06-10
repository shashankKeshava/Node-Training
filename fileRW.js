//  ================  write ==========
var fs = require('fs');
var readableStream = fs.createReadStream('test2.txt');
var writableStream = fs.createWriteStream('test2a.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function(blk) {
    writableStream.write(blk);
});


//  ================  write ==========

var stream = fs.createWriteStream('test2a.txt', { flags: 'a' });
var data = "using node!\n";
stream.write(data, function() {
    // Now the data has been written.
});
