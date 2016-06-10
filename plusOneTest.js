var spawn = require('child_process').spawn;
var child = spawn('node', ['plusOne.js']);

setInterval(function() {
    var number = Math.floor(Math.random() * 100);

    // Send that number to the child process:
    child.stdin.write(number + "\n");

    // Get the response from the child process and print it:
    child.stdout.once('data', function(data) {
        console.log('child replied to ' + number + ' with: ' + data);
    });
}, 1000);

child.stderr.on('data', function(data) {
    console.log("stderr_data: ", data);
    process.stdout.write(data);
});
