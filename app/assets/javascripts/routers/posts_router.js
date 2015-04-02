JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    '': 'new',
    'posts/new': 'new',
    'posts/:id': 'show'
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    this.$sidebar = $rootEl.find('.sidebar');
    this.$content = $rootEl.find('.content');

    this.posts = new JournalApp.Collections.Posts();

    var postsIndex = new JournalApp.Views.PostsIndex({ collection: this.posts });
    this.posts.fetch();
    this.$sidebar.html(postsIndex.render().$el);
  },

  show: function (id) {
    var post = this.posts.getOrFetch(id);
    var postShow = new JournalApp.Views.PostShow({
      model: post,
      collection: this.posts
    });
    this.$content.html(postShow.render().$el);
  },

  new: function () {
    var post = new JournalApp.Models.Post();
    var postForm = new JournalApp.Views.PostForm({
      model: post,
      collection: this.posts
    });
    this.$content.html(postForm.render().$el);
  }
});
