define(function (require) {
  var update = require('../../lib/game/update');

  module('update');

  test('updates current scene', function () {
    var callback = sinon.spy();
    var state = { currentScene: { update: callback } };
    update(state);
    ok(callback.calledWith(state));
  });

  test('does not break if the current scene not have an update callback', function () {
    expect(0);
    update({ currentScene: { } });
  });
});
