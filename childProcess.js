console.log("starting  ...\n");
// ------------------------
var cp = require("child_process");

cp.exec("ls -l /", function(error, stdout, stderr) {
    //cp.exec("dir c:\\", function(error, stdout, stderr) {
    if (error) {
        console.error(error.toString());
    } else if (stderr !== "") {
        console.error(stderr);
    } else {
        console.log(stdout);
    }
});
