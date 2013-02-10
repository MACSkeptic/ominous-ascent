define(function (require) {
  var movement = require('../../lib/component/movement');
  var instance;
  var entity;
  var state;

  function setup() {
    entity = { x: 0, y: 0 };
    state = { elapsed: 0 };
    instance = movement();
  }

  module('movement', { setup: setup });

  test('nothing', function () {
    state.elapsed = 9001;
    instance.actOn(entity, state);
    equal(entity.x, 0);
    equal(entity.y, 0);
  });

  test('velocity', function () {
    entity.velocityX = 5; // meters/sec
    entity.velocityY = 10; // meters/sec
    state.elapsed = 2000; // 2 sec
    instance.actOn(entity, state);
    equal(entity.x, 10);
    equal(entity.y, 20);
  });

  test('acceleration', function () {
    // this is absurdely dumbed down and broken as far as real physics is concerned
    entity.velocityX = 0; // meters/second
    entity.velocityY = 0; // meters/second
    entity.accelerationX = 5; // meters/second/second
    entity.accelerationY = 10; // meters/second/second
    state.elapsed = 2000; // 2 seconds
    instance.actOn(entity, state);
    equal(entity.velocityX, 10);
    equal(entity.velocityY, 20);
    equal(entity.x, 20);
    equal(entity.y, 40);
  });

  test('max velocity', function () {
    entity.velocityX = 0;
    entity.velocityY = 0;
    entity.maxVelocityX = 2;
    entity.maxVelocityY = 1;
    entity.accelerationX = 5;
    entity.accelerationY = -10;
    state.elapsed = 2000;
    instance.actOn(entity, state);
    equal(entity.velocityX, 2);
    equal(entity.velocityY, -1);
    equal(entity.x, 4);
    equal(entity.y, -2);
  });
});
