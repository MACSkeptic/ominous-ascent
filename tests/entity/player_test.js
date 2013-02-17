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

    instance.handleInput({}, { keyPressed: pressed, clicked: sinon.stub() });
    equal(instance.velocityX, -instance.velocity);
  });

  test('move right', function () {
    var pressed = sinon.stub();
    pressed.returns(false);
    pressed.withArgs('d').returns(true);

    instance.handleInput({}, { keyPressed: pressed, clicked: sinon.stub() });
    equal(instance.velocityX, instance.velocity);
  });

  test('move up', function () {
    var pressed = sinon.stub();
    pressed.returns(false);
    pressed.withArgs('w').returns(true);

    instance.handleInput({}, { keyPressed: pressed, clicked: sinon.stub() });
    equal(instance.velocityY, -instance.velocity);
  });

  test('move down', function () {
    var pressed = sinon.stub();
    pressed.returns(false);
    pressed.withArgs('s').returns(true);

    instance.handleInput({}, { keyPressed: pressed, clicked: sinon.stub() });
    equal(instance.velocityY, instance.velocity);
  });

  test('shoots at click', function () {
    var click = { x: 10, y: 20 };
    var scene = 'scene';
    var state = { currentScene: scene };
    var clicked = sinon.stub();
    clicked.returns(false);
    clicked.withArgs(scene).returns(click);

    sinon.stub(instance.components[1], 'shoot');

    instance.handleInput(state, { keyPressed: sinon.stub(), clicked: clicked });

    equal(instance.components[1].shoot.callCount, 1);
    equal(instance.components[1].shoot.lastCall.args[0], state);
    equal(instance.components[1].shoot.lastCall.args[1], click);
  });
});
