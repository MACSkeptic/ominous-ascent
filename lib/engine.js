define(function (require) {
  function create(firstScene) {
    function startCallbacks(callbacks) {
      gameLoop.start(_.extend.apply(_, callbacks));
    }

    function start() {
      var callbacks = arguments;
      $(function () { startCallbacks(callbacks); });
    }

    var gameLoop = require('./engine/game_loop')(firstScene);
    return { start: start, init: gameLoop.init };
  }

  return create;
});
