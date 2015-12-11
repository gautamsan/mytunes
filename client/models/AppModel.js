// AppModel.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
  
  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      //collection.add (http://backbonejs.org/#Model-Collections)
      this.get('songQueue').add(song); //'add' event is triggered by Backbone
    }, this);

    params.library.on('dequeue', function(song){
      //collection.remove (http://backbonejs.org/#Model-Collections)
      var currentSongQueue = this.get('songQueue');
      if(currentSongQueue.length <= 1) {
        this.set('currentSong', null); //stop the song
      } else if(song === currentSongQueue.at(0)) {
        currentSongQueue.shift(); 
        currentSongQueue.at(0).play();          
      }
      currentSongQueue.remove(song);
    }, this);

/*    this.get('songQueue').on('stopped', function(song){
      //collection.remove (http://backbonejs.org/#Model-Collections)
      this.set('currentSong', null);
    }, this);*/

    //http://www.igloolab.com/downloads/backbone-cheatsheet.pdf
  }
});
