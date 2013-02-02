define(function (require) {
  var gameLoop = require('../../lib/engine/game_loop');
  var firstScene = function () { return 'firstScene'; };

  module('game loop');

  test('init', function () {
    var callback = sinon.spy();

    gameLoop(firstScene).start({ game: callback });

    ok(callback.lastCall.args[0].currentScene, 'firstScene');
  });

  test('calls the game callback', function () {
    var callback = sinon.spy();

    gameLoop(firstScene).start({ game: callback });

    ok(callback.called);
    equal(callback.callCount, 1);

    window.requestAnimationFrame.lastCall.args[0]();
    equal(callback.callCount, 2);

    equal(window.requestAnimationFrame.callCount, 2);
  });

  test('calls the update callback', function () {
    var callback = sinon.spy();

    gameLoop(firstScene).start({ update: callback });

    ok(callback.called);
    equal(callback.callCount, 1);

    window.requestAnimationFrame.lastCall.args[0]();
    equal(callback.callCount, 2);

    equal(window.requestAnimationFrame.callCount, 2);
  });

  test('calls the draw callback', function () {
    var callback = sinon.spy();

    gameLoop(firstScene).start({ draw: callback });

    ok(callback.called);
    equal(callback.callCount, 1);

    window.requestAnimationFrame.lastCall.args[0]();
    equal(callback.callCount, 2);

    equal(window.requestAnimationFrame.callCount, 2);
  });
});
