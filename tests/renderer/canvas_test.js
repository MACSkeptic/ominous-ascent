define(function (require) {
  var canvas = require('../../lib/renderer/canvas');
  var support = require('../../lib/support');

  module('canvas', {
    setup: support.globalStubs.$,
    teardown: support.globalStubs.restore
  });

  test('init', function () {
    var append = sinon.stub();
    var on = sinon.stub();
    var body = {};
    var foreground = jQuery('<canvas id="foreground">');
    var background = jQuery('<canvas id="background">');
    var buffer = jQuery('<canvas id="buffer">');
    var windowStub = { on: on };

    body.append = function (element) {
      append(element);
      return body;
    };

    $.withArgs('body').returns(body);
    $.withArgs('<canvas id="background">').returns(background);
    $.withArgs('<canvas id="foreground">').returns(foreground);
    $.withArgs('<canvas id="buffer">').returns(buffer);
    $.withArgs(window).returns(windowStub);

    canvas(1, 2);

    equal(append.callCount, 2);
    equal(append.firstCall.args[0], background[0]);
    equal(append.lastCall.args[0], foreground[0]);

    equal(on.lastCall.args[0], 'resize');
    equal(typeof(on.lastCall.args[1]), 'function');
  });
});
