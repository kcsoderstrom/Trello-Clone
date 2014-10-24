TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  initialize: function(options) {
    if(options) {
      this.id = options.id;
    }
  }

  // lists: function() {
  //   if(!(this._lists)) {
  //     this._lists = new TrelloClone.Collections.Lists({parent: this});
  //   }
  //   return this._lists;
  // }
});