define(function (require) {
  var geometry = require('../../lib/util/geometry');
  var instance;

  module('geometry', { setup: function () { instance = geometry(); } });

  test('turn a scalar intensity into a vector pointing at a point', function () {
    var origin = { x: 0, y: 0 };
    var target = { x: 6, y: 8 };
    var intensity = 5;

    var result = instance.pointAt({ origin: origin, target: target, intensity: intensity });

    equal(result.x, 3);
    equal(result.y, 4);
  });
});
