define(function (require) {
  var input = require('../../lib/game/input')();
  var support = require('../../lib/support');

  module('input', {
    setup: support.keyboardStubs.activeKeys,
    teardown: support.keyboardStubs.restore
  });

  test('key pressed', function () {
    ok(!input.keyPressed('a'));
    KeyboardJS.activeKeys.returns(['a']);
    ok(input.keyPressed('a'));
  });
});
