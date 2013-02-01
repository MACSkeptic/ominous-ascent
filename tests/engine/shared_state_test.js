define(function (require) {
  var sharedState = require('../../lib/engine/shared_state');

  module('shared state');

  test('default current scene', function () {
    equal(sharedState.currentScene, undefined);
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
