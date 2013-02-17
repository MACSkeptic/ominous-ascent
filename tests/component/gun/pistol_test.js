define(function (require) {
  var pistol = require('../../../lib/component').gun.pistol;
  var bullet;
  var state;
  var scene;
  var entities;
  var instance;
  var owner;
  var target;

  function setup() {
    entities = [];
    scene = { entities: entities };
    state = { currentScene: scene, elapsed: 0 };
    target = { x: 6, y: 8 };
    bullet = sinon.stub();
    owner = { x: 12, y: 16 };
    instance = pistol({ owner: owner, shotVelocity: 5, timeRequiredBetweenShots: 100, shot: bullet });
  }

  module('pistol', { setup: setup });

  test('updates time since last shot', function () {
    equal(instance.timeSinceLastShot, 999999);
    instance.shoot(state, target);
    equal(instance.timeSinceLastShot, 0);
    state.elapsed = 10;
    instance.update(state);
    equal(instance.timeSinceLastShot, 10);
  });

  test('time since last shot does not go over 999999', function () {
    state.elapsed = 999998;
    instance.update(state);
    instance.update(state);
    equal(instance.timeSinceLastShot, 999999);
  });

  test('zero time since last shot', function () {
    state.elapsed = 999998;
    instance.update(state);
    instance.shoot(state, target);
    equal(instance.timeSinceLastShot, 0);
  });

  test('shoots at things', function () {
    var bulletInstance = 'instance of a bullet';

    bullet.returns(bulletInstance);

    instance.shoot(state, target);

    equal(entities[0], bulletInstance);
    QUnit.close(bullet.lastCall.args[0].velocityX, -3, 0.001);
    QUnit.close(bullet.lastCall.args[0].velocityY, -4, 0.001);
    equal(bullet.lastCall.args[0].x, 12);
    equal(bullet.lastCall.args[0].y, 16);
  });

  test('respect time between shots', function () {
    var bulletInstance = 'instance of a bullet';

    bullet.returns(bulletInstance);

    instance.shoot(state, target);
    instance.update(state);
    instance.shoot(state, target);
    instance.update(state);
    instance.shoot(state, target);

    equal(entities.length, 1);

    state.elapsed = 100;

    instance.update(state);
    instance.shoot(state, target);

    equal(entities.length, 2);
  });
});
