define(function (require) {
  var firstScreen = require('../../lib/scene/first_screen');

  var state = { sprites: [new Image()] };
  var playerSpeed = 0.1;
  state.sprites[0].onload = runTests;
  state.sprites[0].src = '/media/sprites/target.png';

  function get(instance, type) {
    return _(instance.entities).filter(function (entity) { return entity.type === type; });
  }

  function runTests() {
    module('first screen');

    test('6 targets', function () {
      var instance = firstScreen(state);
      equal(get(instance, 'target').length, 6);
    });

    test('1 player', function () {
      var instance = firstScreen(state);
      equal(get(instance, 'player').length, 1);
    });

    test('handle input', function () {
      var instance = firstScreen(state);
      var player = get(instance, 'player')[0];
      var input = { keyPressed: function () {}, clicked: function () {} };
      sinon.spy(player, 'handleInput');

      instance.handleInput(state, input);

      equal(player.handleInput.callCount, 1);
      equal(player.handleInput.lastCall.args[0], state);
      equal(player.handleInput.lastCall.args[1], input);
    });
  }
});
