window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.$el = options.el;
    TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();
    TrelloClone.Collections.boards.fetch();
    this.collection = TrelloClone.Collections.boards;
    var router = new TrelloClone.Routers.Router({el: this.$el, collection: this.collection});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize({el: $("#main")});
});