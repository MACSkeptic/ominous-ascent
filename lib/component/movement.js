define(function (require) {
  var acceleration = require('./movement/acceleration')();
  var velocity = require('./movement/velocity')();
  var defaults = {
    actOn: actOn
  };

  function actOn(entity, state) {
    acceleration.actOn(entity, state);
    velocity.actOn(entity, state);
  }

  function create() {
    return defaults;
  }

  return create;
});
