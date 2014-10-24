TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: function() {
    return "boards/" + this.parent.id + "/lists";
  },
  model: TrelloClone.Models.List,

  initialize: function(options) {
    this.parent = options.parent;
  }
})