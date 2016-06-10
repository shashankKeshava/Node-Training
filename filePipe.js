//  =============Pipe ===========

var fs = require('fs');
var readableStream = fs.createReadStream('test2.txt');
var writableStream = fs.createWriteStream('test3.txt');

readableStream.pipe(writableStream);
