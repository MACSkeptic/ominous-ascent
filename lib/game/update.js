define(function (require) {
  var inputHandler = require('./input');
  var input;

  function update(state) {
    state.currentScene.handleInput && state.currentScene.handleInput(state, input);
    state.currentScene.update && state.currentScene.update(state);
  }

  function create() {
    input = input || inputHandler();
    return update;
  }

  return create;
});
