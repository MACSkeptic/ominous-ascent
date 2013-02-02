define(function (require) {
  var firstScreen = require('../../lib/scene/first_screen');

  var state = { sprites: [new Image()] };
  state.sprites[0].onload = runTests;
  state.sprites[0].src = '/media/sprites/target.png';

  function runTests() {
    module('first screen');

    test('has 6 targets', function () {
      firstScreen.update(state);
      firstScreen.update(state);
      equal(firstScreen.layers.foreground.get('.target').length, 6);
    });
  }
});
