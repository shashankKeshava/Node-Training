console.log("starting  ...\n");
// ------------------------


var events = require("events");
var emitter = new events.EventEmitter();

var username = "nodeUser2";
var password = "password";

emitter.emit("userAdded", username, password);

// an event listener - added BEFORE emitting that event.
// Cannot detect past events.

//Registering listeners
emitter.on("userAdded", function(username, password) {
    console.log("Added user " + username);
});


emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
