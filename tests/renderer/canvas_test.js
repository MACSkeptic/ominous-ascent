define(function (require) {
  var canvas = require('../../lib/renderer/canvas');
  var support = require('../../lib/support');

  module('canvas', {
    setup: support.kineticStubs.stage,
    teardown: support.kineticStubs.restore
  });

  test('init', function () {
    canvas(1, 2);

    ok(Kinetic.Stage.called);
    equal(Kinetic.Stage.callCount, 1);
    equal(Kinetic.Stage.lastCall.args[0].width, 1);
    equal(Kinetic.Stage.lastCall.args[0].height, 2);
    equal(Kinetic.Stage.lastCall.args[0].container, 'container');
  });

  test('draws', function () {
    var screenWidth = 50;
    var screenHeight = 42;
    var sceneWidth = 10;
    var sceneHeight = 7;

    var instance = canvas(screenWidth, screenHeight);

    var spies = Kinetic.Stage.lastCall.returnValue;
    var layers = { background: 'background', foreground: 'foreground' };
    var state = { currentScene: { layers: layers, width: sceneWidth, height: sceneHeight } };

    spies.getWidth.returns(screenWidth);
    spies.getHeight.returns(screenHeight);

    instance.callbacks.draw(state); // draw with brand new foreground and background (resets layers)

    equal(spies.setScale.callCount, 1);
    equal(spies.setScale.lastCall.args[0], screenWidth / sceneWidth);
    equal(spies.setScale.lastCall.args[1], screenHeight / sceneHeight);

    equal(spies.removeChildren.callCount, 1);
    equal(spies.add.callCount, 2);
    ok(spies.add.calledWith('background'));
    equal(spies.add.lastCall.args[0], 'foreground');
    equal(spies.draw.callCount, 1);

    instance.callbacks.draw(state); // draw with same foreground and background (does NOT reset layers)

    equal(spies.removeChildren.callCount, 1);
    equal(spies.add.callCount, 2);
    equal(spies.draw.callCount, 2);

    layers.background = 'new background';
    instance.callbacks.draw(state); // draw with a new background (resets layers)

    equal(spies.removeChildren.callCount, 2);
    equal(spies.add.callCount, 4);
    ok(spies.add.calledWith('new background'));
    equal(spies.add.lastCall.args[0], 'foreground');
    equal(spies.draw.callCount, 3);

    layers.foreground = 'new foreground';
    instance.callbacks.draw(state); // draw with a new foreground (resets layers)

    equal(spies.removeChildren.callCount, 3);
    equal(spies.add.callCount, 6);
    ok(spies.add.calledWith('new background'));
    equal(spies.add.lastCall.args[0], 'new foreground');
    equal(spies.draw.callCount, 4);
  });
});
