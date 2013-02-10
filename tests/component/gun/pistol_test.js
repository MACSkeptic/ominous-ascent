define(function (require) {
  var pistol = require('../../../lib/component').gun.pistol;
  var bullet;
  var state;
  var scene;
  var entities;
  var instance;

  function setup() {
    entities = [];
    scene = { entities: entities };
    state = { currentScene: scene };
    bullet = sinon.stub();
    instance = pistol({}, bullet);
  }

  module('pistol', { setup: setup });

  test('updates time since last shot', function () {
    equal(instance.timeSinceLastShot, 0);
    instance.shoot(state);
    equal(instance.timeSinceLastShot, 0);
    state.elapsed = 10;
    instance.update(state);
    equal(instance.timeSinceLastShot, 10);
  });

  test('shoots', function () {
    var bulletInstance = 'instance of a bullet';
    bullet.returns(bulletInstance);

    instance.shoot(state);

    equal(entities[0], bulletInstance);
  });
});
