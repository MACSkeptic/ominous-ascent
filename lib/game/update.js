define(function (require) {
  var inputHandler = require('./input');
  var input;

  function update(state) {
    input.update && input.update(state);
    state.currentScene.handleInput && state.currentScene.handleInput(state, input);
    state.currentScene.update && state.currentScene.update(state);
  }

  function create(customInput) {
    input = customInput || input || inputHandler();
    return update;
  }

  return create;
});
