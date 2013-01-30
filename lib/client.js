define(function (require) {
  var engine = require('./engine'),
      game = require('./game'),
      renderer = require('./renderer');

  renderer.canvas.init();
  
  engine.start(game.callbacks, renderer.canvas.callbacks);
});
