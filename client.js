define(function (require) {
  var engine = require('./lib/engine'),
      game = require('./lib/game'),
      renderer = require('./lib/renderer'),
      firstScene = require('./lib/scene/splash_screen');

  renderer.canvas.init(window.innerWidth, window.innerHeight);
  engine.init(firstScene);
  
  engine.start(game.callbacks, renderer.canvas.callbacks);
});
