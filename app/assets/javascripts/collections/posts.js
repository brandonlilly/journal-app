JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: 'api/posts',
  model: JournalApp.Models.Post,

  getOrFetch: function (id) {
    var posts = this;

    var post = this.get(id);
    if (post) {
      post.fetch();
    } else {
      post = new JournalApp.Models.Post({ id: id });
      post.fetch({
        success: function() {
          posts.add(post);
        }
      });
    }

    return post;
  }
});
