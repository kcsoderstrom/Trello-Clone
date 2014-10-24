TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "boardsIndex",
    "boards/new" : "boardNew",
    "boards/:id" : "boardShow",
  },

  initialize: function(options) {
    this.$el = options.el;
    this.collection = options.collection;
  },

  render: function(renderedContent) {
    this.$el.html(this.renderedContent);
  },

  boardsIndex: function() {
    var indexView = new TrelloClone.Views.BoardsIndex({collection: this.collection});
    this.renderedContent = indexView.render().$el;
    this.render();
  },

  boardShow: function(id) {
    var board = this.collection.getOrFetch(id);
    var boardView = new TrelloClone.Views.Board({model: board});
    var newListView = new TrelloClone.Views.NewList({collection: board.lists, board: board});

    this.renderedContent = $("<div>");
    this.renderedContent.append(boardView.render().$el);
    this.renderedContent.append(newListView.render().$el);

    this.render();
  },

  boardNew: function() {
    var newView = new TrelloClone.Views.NewBoard({collection: this.collection});
    this.renderedContent = newView.render().$el;
    this.render();
  }

})