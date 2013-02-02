define(function (require) {
  var firstScene = require('./lib/scene/splash_screen');
  var game = require('./lib/game')();
  var canvas = require('./lib/renderer').canvas(window.innerWidth, window.innerHeight);
  var engine = require('./lib/engine')(firstScene);

  engine.start(game.callbacks, canvas.callbacks);
});
