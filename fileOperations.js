console.log("starting  ...\n");
// ------------------------
var fs = require('fs');

var readableStream = fs.createReadStream('test2.txt');
var data = '';

readableStream.setEncoding('utf8');

//DMA passing blocks of data to 'data' buffer
readableStream.on('data', function(block) {
    data += block;
});

// data buffer being dumped
readableStream.on('end', function() {
    console.log(data);
});
