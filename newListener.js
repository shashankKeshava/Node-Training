console.log("starting  ...\n");
// ------------------------
var events = require("events");
var emitter = new events.EventEmitter();

//Each time a new event handler is registered, the event emitter emits a newListener event. 
//This event is used to detect new event handlers.

emitter.on("newListener", function(eventName, listener) {
    console.log("Added listener for " + eventName + " events");
});

emitter.on("evt2", function() { console.log("evt handled"); });

emitter.on("shank", function() { console.log("shank handled"); });

emitter.emit("shank");

emitter.emit("evt2");
