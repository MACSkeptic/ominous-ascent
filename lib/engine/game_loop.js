define(function (require) {
  function create(firstScene) {
    var internalState = require('./internal_state')();
    var sharedState = require('./shared_state')(firstScene);

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
      _(internalState.callbacks).extend(callbacks);
      loop();
    }

    return { start: start };
  }

  return create;
});
