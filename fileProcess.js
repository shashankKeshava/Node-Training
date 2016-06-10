console.log("starting  ...\n");

var fs = require("fs");


var fileName = "";
//var fileName = "colors.js";

try {
    fs.readFile(fileName, "utf8", function(error, data) {
        if (error) {
            throw error;
        }
        console.log(data);
    });
} catch (e) {
    console.log("exception caught: ", e)
        /* 
        (a) Error: ENOENT: no such file or directory- the exception is left uncaught.
        OR 
        (b) exception caught:  [ReferenceError: fileName is not defined]
        */
}

process.on('uncaughtException', function(error) {
    console.log('Exception Caught!!');
});
