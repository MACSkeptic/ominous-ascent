define(function (require) {
  var firstScreen = require('../../lib/scene/first_screen');

  var state = { sprites: [new Image()] };
  var playerSpeed = 0.1;
  state.sprites[0].onload = runTests;
  state.sprites[0].src = '/media/sprites/target.png';

  function runTests() {
    module('first screen');

    test('6 targets', function () {
      var instance = firstScreen(state);
      equal(instance.layers.foreground.get('.target').length, 6);
    });

    test('1 player', function () {
      var instance = firstScreen(state);
      equal(instance.layers.foreground.get('.player').length, 1);
    });

    test('player move left', function () {
      var instance = firstScreen(state);
      var player = instance.layers.foreground.get('.player')[0];
      var x = player.getX();
      var pressed = sinon.stub();
      pressed.returns(false);
      pressed.withArgs('a').returns(true);

      instance.handleInput({}, { keyPressed: pressed });
      equal(player.getX(), x - playerSpeed);
    });

    test('player move right', function () {
      var instance = firstScreen(state);
      var player = instance.layers.foreground.get('.player')[0];
      var x = player.getX();
      var pressed = sinon.stub();
      pressed.returns(false);
      pressed.withArgs('d').returns(true);

      instance.handleInput({}, { keyPressed: pressed });
      equal(player.getX(), x + playerSpeed);
    });

    test('player move up', function () {
      var instance = firstScreen(state);
      var player = instance.layers.foreground.get('.player')[0];
      var y = player.getY();
      var pressed = sinon.stub();
      pressed.returns(false);
      pressed.withArgs('w').returns(true);

      instance.handleInput({}, { keyPressed: pressed });
      equal(player.getY(), y - playerSpeed);
    });

    test('player move down', function () {
      var instance = firstScreen(state);
      var player = instance.layers.foreground.get('.player')[0];
      var y = player.getY();
      var pressed = sinon.stub();
      pressed.returns(false);
      pressed.withArgs('s').returns(true);

      instance.handleInput({}, { keyPressed: pressed });
      equal(player.getY(), y + playerSpeed);
    });
  }
});
