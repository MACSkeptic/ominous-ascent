define(function (require) {
  var engine = require('./engine'),
      game = require('./game'),
      renderer = require('./renderer'),
      firstScene = require('./scene/splash_screen');

  renderer.canvas.init(window.innerWidth, window.innerHeight);
  engine.init(firstScene);
  
  engine.start(game.callbacks, renderer.canvas.callbacks);
});
