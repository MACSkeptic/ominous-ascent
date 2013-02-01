define(function (require) {
  var canvas = require('../../lib/renderer/canvas'),
      support = require('../../lib/support');

  module('canvas', {
    setup: support.kineticStubs.stage,
    teardown: support.kineticStubs.restore
  });

  test('init', function () {
    canvas.init(1, 2);

    ok(Kinetic.Stage.called);
    equal(Kinetic.Stage.callCount, 1);
    equal(Kinetic.Stage.lastCall.args[0].width, 1);
    equal(Kinetic.Stage.lastCall.args[0].height, 2);
    equal(Kinetic.Stage.lastCall.args[0].container, 'container');
  });

  test('draw', function () {
    canvas.init(1000, 1000);

    var spies = Kinetic.Stage.lastCall.returnValue;
    var layers = { background: 'background', foreground: 'foreground' };
    var engine = { currentScene: { layers: layers } };

    canvas.callbacks.draw(engine); // draw with brand new foreground and background (resets layers)

    equal(spies.removeChildren.callCount, 1);
    equal(spies.draw.callCount, 1);
    equal(spies.add.callCount, 2);
    ok(spies.add.calledWith('background'));
    equal(spies.add.lastCall.args[0], 'foreground');

    canvas.callbacks.draw(engine); // draw with same foreground and background (does NOT reset layers)

    equal(spies.removeChildren.callCount, 1);
    equal(spies.draw.callCount, 2);
    equal(spies.add.callCount, 2);

    layers.background = 'new background';
    canvas.callbacks.draw(engine); // draw with a new background (resets layers)

    equal(spies.removeChildren.callCount, 2);
    equal(spies.draw.callCount, 3);
    equal(spies.add.callCount, 4);
    ok(spies.add.calledWith('new background'));
    equal(spies.add.lastCall.args[0], 'foreground');

    layers.foreground = 'new foreground';
    canvas.callbacks.draw(engine); // draw with a new foreground (resets layers)

    equal(spies.removeChildren.callCount, 3);
    equal(spies.draw.callCount, 4);
    equal(spies.add.callCount, 6);
    ok(spies.add.calledWith('new background'));
    equal(spies.add.lastCall.args[0], 'new foreground');
  });
});
