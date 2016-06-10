// ensure "curl" is installed and in the path.

var fs = require('fs');
var url = require('url');
var http = require('http');

var spawn = require('child_process').spawn;


var file_url = 'http://www.mapsofworld.com/india/maps/india-map.gif';
var DOWNLOAD_DIR = './downloads/';

var download_file_curl = function(file_url) {

    var file_name = url.parse(file_url).pathname.split('/').pop();
    var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

    // spawns a child process
    var curl = spawn('curl', [file_url]);

    curl.stdout.on('data', function(data) { file.write(data); });

    curl.stdout.on('end', function(data) {
        file.end();
        console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });

    // on child process exit, check for error.
    curl.on('exit', function(code) {
        if (code != 0) {
            console.log('Failed: ' + code);
        }
    });
};


// ============== usage =================

console.log("download started....");
download_file_curl(file_url);
