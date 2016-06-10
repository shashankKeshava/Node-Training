/*
a) rss—The resident set size, the portion of the process’s memory that is held in RAM.
b) heapTotal—Available memory for dynamic allocations
c) heapUsed—Amount of heap used
*/


console.log("process.arch: ", process.arch);
console.log("process.mem: ", process.memoryUsage());
console.log("pid: ", process.pid);



// works on linux OS: signal hang up

// process.stdin.resume();
// process.on('SIGINT', function() {
//     console.log(' signal received...');
// });
