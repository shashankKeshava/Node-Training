var events = require('events');
var util = require('util');

// Pulsar Inherits EventEmitter
util.inherits(Pulsar, events.EventEmitter);

function Pulsar(interval, reps) {
    var self = this;
    var emits = 0;
    var timer = setInterval(function() {
        //Emits the Event pulse
        self.emit('pulse');
        emits++;
        //Checks and clears if reps is 5
        if (emits === reps) {
            clearInterval(timer);
        }
    }, interval);
};

var pulsar = new Pulsar(1000, 5);

//Listner Defined for event pulse
pulsar.on('pulse', function() {
    console.log("process.mem: ", process.memoryUsage());
});
