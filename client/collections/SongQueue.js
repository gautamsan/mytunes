// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //'Add' event is triggered from somewhere else
    this.on('add', this.playFirst, this);
    this.on('ended', this.playNext, this);
  },
  model: SongModel,

  playFirst: function() {
    this.at(0).play(); 
  },

  playNext: function(){
    this.shift();
    this.playFirst();
  }
});

//http://backbonejs.org/#Model-Collections