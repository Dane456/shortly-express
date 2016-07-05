window.Shortly = Backbone.View.extend({
  template: Templates['layout'],

  events: {
    'click li a.index': 'renderIndexView',
    'click li a.create': 'renderCreateView', 
    'click li a.login': 'renderLoginView', 
    'click li a.signup': 'renderSignupView'
  },

  initialize: function() {
    console.log( 'Shortly is running' );
    $('body').append(this.render().el);

    this.router = new Shortly.Router({ el: this.$el.find('#container') });
    this.router.on('route', this.updateNav, this);

    Backbone.history.start({ pushState: true });
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },

  renderCreateView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/create', { trigger: true });
  },

  renderLoginView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/login', { trigger: true });
    $('#container').html(
      `<h2>Login</h2>
      <form action="/login" method="post">
          <div>
            <label for="username">Username:</label>
            <input id="username" type="text" name="username">
          </div>
          <div>
            <label for="password">Password:</label>
            <input id="password" type="password" name="password">
          </div>
          <div>
            <input type="submit" value="Login">
          </div>
      </form>
      <p>
        <a href="/signup">Create an Account &rarr;</a>
      </p>`
      );
    $('a').removeClass('selected');
    $('.login:parent').addClass('selected');
  },

  renderSignupView: function(e) {
    this.router.navigate('/signup', { trigger: true });
    e && e.preventDefault();
    $('#container').html(
      `<h2>Sign up</h2>
      <form action="/signup" method="post">
        <div>
          <label for="username">Username:</label>
          <input id="username" type="text" name="username">
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" type="password" name="password">
        </div>
        <div>
          <input type="submit" value="Sign up">
        </div>
    </form>
    <p>
      <a href="/login">Login to your account &rarr;</a>
    </p>`);
    $('a').removeClass('selected');
    $('.signup:parent').addClass('selected');
  },

  updateNav: function(routeName) {
    this.$el.find('.navigation li a')
      .removeClass('selected')
      .filter('.' + routeName)
      .addClass('selected');
  }
});
