define(function (require) {
  var sharedState;
  var defaultFirstScene = function () { return 'default first scene'; };

  function setup() {
    sharedState = require('../../lib/engine/shared_state')(defaultFirstScene);
  }

  module('shared state', { setup: setup });

  test('default current scene', function () {
    equal(sharedState.currentScene, 'default first scene');
  });

  test('change current scene', function () {
    sharedState.changeSceneTo('other scene');
    equal(sharedState.currentScene, 'other scene');
  });

  test('restore previous scene', function () {
    sharedState.changeSceneTo('first scene');
    sharedState.changeSceneTo('second scene');
    sharedState.restorePreviousScene();
    equal(sharedState.currentScene, 'first scene');
  });
});
