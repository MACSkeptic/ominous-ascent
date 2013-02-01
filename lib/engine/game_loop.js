define(function (require) {
  var internalState = require('./internal_state'),
      sharedState = require('./shared_state');

  function draw(state) {
    internalState.callbacks.draw(state);
  }

  function update(state) {
    internalState.callbacks.update(state);
  }

  function game(state) {
    internalState.callbacks.game(state);
  }

  function loop(currentTime) {
    sharedState.elapsed = internalState.lastLoop ? (currentTime - internalState.lastLoop) : 0;

    internalState.lastLoop = currentTime;

    game(sharedState);
    update(sharedState);
    draw(sharedState);

    window.requestAnimationFrame(loop);
  }

  function start(callbacks) {
    _.extend(internalState.callbacks, callbacks);
    loop();
  }

  function init(firstScene) { sharedState.currentScene = firstScene; }

  return { start: start, init: init };
});
