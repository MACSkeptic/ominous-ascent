define(function (require) {
  var gameLoop = require('./engine/game_loop'),
      callbacks = [];

  function startCallbacks() {
    gameLoop.start(_.extend.apply(_, callbacks));
  }

  function start() {
    callbacks = arguments;
    $(startCallbacks);
  }

  return { start: start, init: gameLoop.init };
});
