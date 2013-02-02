define(function (require) {
  var input = require('./input');

  function update(state) {
    state.currentScene.handleInput && state.currentScene.handleInput(state, input);
    state.currentScene.update && state.currentScene.update(state);
  }

  return update;
});
