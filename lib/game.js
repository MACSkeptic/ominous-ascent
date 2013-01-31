define(function (require) {
  var update = require('./game/update');

  return { callbacks: { update: update } };
});
