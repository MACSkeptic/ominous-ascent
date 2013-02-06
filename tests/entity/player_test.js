define(function (require) {
  var player = require('../../lib/entity').player;

  var sprites: [new Image()];
  sprites[0].onload = runTests;
  sprites[0].src = '/media/sprites/demon.png';

  function runTests() {
    var instance;

    function setup() {
      instance = player(sprites, { x: 0, y: 0 });
    }

    module('player', { setup: setup });

    test('speed', function () {
    });
  }
});
