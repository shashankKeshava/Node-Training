var fs = require('fs');

fs.readFile('./colors.js', function(er, buf) {
    console.log("status: ", Buffer.isBuffer(buf)); // true
    console.log("buffer: ", buf);
    console.log(buf.toString('ascii'));
});


var mime = 'image/png';
var encoding = 'base64';
var data = fs.readFileSync('/home/shashank/Downloads/sig.jpeg').toString(encoding);

var uri = 'data:' + mime + ';' + encoding + ',' + data;
console.log(uri);

//  writing into a file.
var data = uri.split(',')[1];
var buf2 = Buffer(data, 'base64');

fs.writeFileSync('/home/shashank/Downloads/pic.jpeg', buf2);
