console.log("starting  ...\n");

//  $ npm install async

// Using Async.series to execute in custom order irrespective of timer

var async = require("async");

async.series([

    function(callback) {
        setTimeout(function() {
            console.log("Task 1");
            callback(null, 1); // error object, or null, if there is no error.
        }, 300);
    },

    function(callback) {
        setTimeout(function() {
            console.log("Task 2");
            callback(null, 2);
        }, 400);
    },

    function(callback) {
        setTimeout(function() {
            console.log("Task 3");
            callback(null, 3);
        }, 100);
    }

], function(error, results) {
    console.log(results);

});
