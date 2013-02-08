define(function (require) {
  var update = require('./game/update');
  var input = require('./game/input');
  
  function create() {
    return { callbacks: { update: update() }, input: input };
  }

  return create;
});
