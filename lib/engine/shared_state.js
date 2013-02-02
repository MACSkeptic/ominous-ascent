define(function (require) {
  function create(firstScene) {
    var state = {
      elapsed: 0,
      changeSceneTo: changeSceneTo,
      restorePreviousScene: restorePreviousScene
    };

    state.currentScene = firstScene(state);
    
    var scenes = [state.currentScene];

    function changeSceneTo(scene) {
      state.currentScene = scene;
      scenes.push(state.currentScene);
    }

    function restorePreviousScene() {
      scenes.pop();
      state.currentScene = _(scenes).last();
    }

    return state;
  }

  return create;
});
