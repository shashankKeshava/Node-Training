var EventEmitter = require('events').EventEmitter;

function complexOperations() {
    var events = new EventEmitter();
    //Triggering of Event before Listner being defined
    // Process NextTick makes sure that first listner is defined then it allows to trigger the event
    process.nextTick(function() { events.emit('success'); });
    return events;
};

//Listner is defined 

complexOperations().on('success', function() {
    console.log('success evt received!');
});
