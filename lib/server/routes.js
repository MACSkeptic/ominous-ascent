define(function (require) {
  var index = require('./routes/index');

  function register(app) {
    app.get('/', index);
  }

  return { register: register };
});
