define(function (require) {
  var player = require('../../lib/entity').player;
  var instance;

  function setup() {
    instance = player({ x: 0, y: 0 });
  }

  module('player', { setup: setup });

  test('move left', function () {
    var pressed = sinon.stub();
    pressed.returns(false);
    pressed.withArgs('a').returns(true);

    instance.handleInput({}, { keyPressed: pressed });
    equal(instance.velocityX, -instance.velocity);
  });

  test('move right', function () {
    var pressed = sinon.stub();
    pressed.returns(false);
    pressed.withArgs('d').returns(true);

    instance.handleInput({}, { keyPressed: pressed });
    equal(instance.velocityX, instance.velocity);
  });

  test('move up', function () {
    var pressed = sinon.stub();
    pressed.returns(false);
    pressed.withArgs('w').returns(true);

    instance.handleInput({}, { keyPressed: pressed });
    equal(instance.velocityY, -instance.velocity);
  });

  test('move down', function () {
    var pressed = sinon.stub();
    pressed.returns(false);
    pressed.withArgs('s').returns(true);

    instance.handleInput({}, { keyPressed: pressed });
    equal(instance.velocityY, instance.velocity);
  });
});
