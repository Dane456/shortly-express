Shortly.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'create': 'create',
    // 'login': 'login',
    // 'signup': 'signup'
  },

  swapView: function(view) {
    this.$el.html(view.render().el);
  },

  index: function() {
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });
    this.swapView(linksView);
  },

  create: function() {
    this.swapView(new Shortly.createLinkView());
  },

  // login: function() {
  //   console.log(Shortly.toString());
  //   var loginView = new Shortly.loginView();
  //   this.swapView(loginView);
  // },

  // signup: function() {
  //   console.log(Shortly);
  //   this.swapView(new Shortly.signupView());
  // }

});
