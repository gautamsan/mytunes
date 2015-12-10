// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

/*  initialize: function() {
    console.log("init");
  },

  render: function() {
    return this.$el;
  }

});*/
/////////////////////////////////////////
  tagName: "table",

  initialize: function() {
    console.log(this);
    //this.collection.on('all', this.render, this);
    this.render();
  },

  render: function(){
    console.log("render sQV")
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        console.log(song);
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
