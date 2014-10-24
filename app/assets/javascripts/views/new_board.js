TrelloClone.Views.NewBoard = Backbone.View.extend({
  template: JST["new_board"],

  events: {
    "submit form.new-board" : "createBoard"
  },

  render: function(){
    var newBoard = new TrelloClone.Models.Board();
    this.$el.html(this.template({model: newBoard}));
    return this;
  },

  createBoard: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON();
    var newBoard = new TrelloClone.Models.Board();
    newBoard.set(formData);

    this.collection.create(newBoard, {
      success: function(){
        Backbone.history.navigate("boards/" + newBoard.id, {trigger: true});
      },
      error: function(){

      }
    });
    this.collection.create(formData, {parse: true});
  }
});