TrelloClone.Views.NewList = Backbone.View.extend({
  template: JST["new_list"],

  intialize: function(options) {
    this.parent = options.board;
    this.listenTo(this.parent, "sync", this.render); //remember to remove old views in the router dummy!!
  },

  events: {
    "submit form.new-list" : "createList"
  },

  render: function() {
    this.model = new TrelloClone.Models.List();
    this.$el.html(this.template({model: this.model}));
    return this;
  },

  createList: function(event) {
    event.preventDefault();
    var newList = new TrelloClone.Models.List();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON();
    var boardId = this.parent.id;     //throwing an error right now

    // newList.set(formData);
    newList.set({list: {board_id: boardId, title: formData["list"]["title"]}});

    this.collection.create(newList, {
      success: function() {
        var showPageUrl = "boards/" + boardId;
        Backbone.history.navigate(showPageUrl);
      }
    });
  }
});