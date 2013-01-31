define(function (require) {
  var internalEngine = {
    callbacks: {
      update: function () {},
      draw: function () {},
      game: function () {}
    }
  };

  function draw(engine) {
    engine.callbacks.draw(engine);
  }

  function update(engine) {
    engine.callbacks.update(engine);
  }

  function game(engine) {
    engine.callbacks.game(engine);
  }

  function loop(currentTime) {
    internalEngine.elapsed = internalEngine.lastLoop ? (currentTime - internalEngine.lastLoop) : 0;

    internalEngine.lastLoop = currentTime;

    game(internalEngine);
    update(internalEngine);
    draw(internalEngine);

    window.requestAnimationFrame(loop);
  }

  function start(callbacks) {
    _.extend(internalEngine.callbacks, callbacks);
    loop();
  }

  return { start: start };
});
