define(function (require) {
  var gameLoop = require('./engine/game_loop');

  function startCallbacks(callbacks) {
    $(function () { gameLoop.start(_.extend.apply(_, callbacks)); });
  }

  function start() { startCallbacks(arguments); }

  return { start: start };
});
