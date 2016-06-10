// $  npm install q
// $  npm install request

//https://api.github.com/repos/angular/angular.js/issues/4


var FS = require('fs'),
    Q = require('q'),
    request = require('request');

function getResults(pathToFile) {

    return Q.nfcall(FS.readFile, pathToFile, "utf-8")
        // This functionality Shows using promise, multiple ajax request are made and returned spread after all promises are made
        .then(function(repo) {
            var options = { headers: { 'User-Agent': 'MyAgent' } }; // github requires user agent string
            return [Q.nfcall(request, 'https://api.github.com/repos/' + repo + '/issues/1', options),
                Q.nfcall(request, 'https://api.github.com/repos/' + repo + '/issues/4', options)
            ];
        })

    .spread(function(collaboratorsRes, commitsRes) {

            return [collaboratorsRes[1], commitsRes[1]]; // return the response body
        })
        //The two calls are returned as an array of promises, 
        //which are then “spread” over their eventually fulfilled results.

    .fail(function(err) {
        console.error(err);
        return err;
    });
}

// actual call to the server.
getResults('repos.txt').then(function(responses) {
    console.error(responses[0]);
    console.error("---------------------------------------------------------");
    console.error(responses[1]);
});
