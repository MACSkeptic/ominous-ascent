define(function (require) {
  function update(state) {
    state.currentScene.handleInput && state.currentScene.handleInput(state);
    state.currentScene.update && state.currentScene.update(state);
  }

  return update;
});
