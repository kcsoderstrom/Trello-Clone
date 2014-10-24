TrelloClone.Views.Board = Backbone.View.extend({
  template: JST["board"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.delete-board" : "delete"
  },

  render: function() {
    this.$el.html(this.template({model: this.model}));
    return this;
  },

  delete: function(event) {
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  }
})