// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
//TODO: this function is not being called. Figure out why?
var SongQueueEntryView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
