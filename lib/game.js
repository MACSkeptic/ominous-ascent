define(function (require) {
  var update = require('./game/update');
  
  function create() {
    return { callbacks: { update: update } };
  }

  return create;
});
