TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",
  model: TrelloClone.Models.Board,

  getOrFetch: function(id, options) {
    var model;

    if( !(model = this.get(id)) ) {
      model = new TrelloClone.Models.Board({id: id});
      model.fetch();
    }

    return model;
  }
});

