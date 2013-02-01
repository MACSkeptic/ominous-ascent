define(function (require) {
  var state = {
    elapsed: 0,
    changeSceneTo: changeSceneTo,
    restorePreviousScene: restorePreviousScene,
    currentScene: undefined
  }, scenes = [];

  function changeSceneTo(scene) {
    scenes.push(scene);
    state.currentScene = scene;
  }

  function restorePreviousScene() {
    scenes.pop();
    state.currentScene = _(scenes).last();
  }

  return state;
});
