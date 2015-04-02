JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['posts/index_item'],
  tagName: 'li',
  events: {
    'click .delete-item': 'removePost',
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  removePost: function (event) {
    this.model.destroy();
    this.remove();
  },
});
