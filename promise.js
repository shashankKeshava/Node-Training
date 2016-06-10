// $  npm install q

var q = require('q');

// console.log(q) ;

function doSomethingAsync() {
    //Creates object of promise
    var deferred = q.defer();
    setTimeout(function() {
        console.log("timer fired.");
        //Promise Fullfilled
        deferred.resolve('node looks promising.');
    }, 500);

    return deferred.promise;
}

// Tap into data of promise 
// .then is like a callback
doSomethingAsync().then(function(val) {
    console.log('Promise Resolved!\n', val);
});
