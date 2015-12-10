// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
//TODO: this function is not being called. Figure out why?
var SongQueueEntryView = Backbone.View.extend({
  initialize: function() {
    console.log("SQEV2");
    this.collection.on('all', this.render, this);
    //this.model.on('all', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

//might not need at all: tendency to confuse us
  // events: {
  //   'click': function() {
  //     this.model.enqueue();
  //   }
  // },

  render: function(){
    console.log("called");
    return this.$el.html(this.template(this.model.attributes));
  }
});
