define(function (require) {
  var index = require('./routes/index'),
      optimised = require('./routes/optimised');

  function register(app) {
    app.get('/', index);

    app.get('/optimised/client', optimised.client);
  }

  return { register: register };
});
