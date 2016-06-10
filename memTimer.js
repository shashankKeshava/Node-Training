
function memUsage() {

    console.log("process.mem: ", process.memoryUsage());

}
var timer = setInterval(memUsage, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5100);
