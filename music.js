var util = require('util');
var events = require('events');

var AudioDevice = {
    play: function(track) {
        console.log("playing AD");
    },

    stop: function() {
        console.log("stopping AD");
    }
};

//  alt. way
function MusicPlayer() {
    this.playing = false;
    events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter);



var musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track) {
    this.playing = true;
    AudioDevice.play(track);
});

musicPlayer.on('stop', function() {
    this.playing = false;
    AudioDevice.stop();
});

musicPlayer.emit('play', 'Cosmic Raga');

setTimeout(function() {
    musicPlayer.emit('stop');
}, 1500);
