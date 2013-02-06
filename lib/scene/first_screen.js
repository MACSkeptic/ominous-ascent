define(function (require) {
  var target = require('./first_screen/target');
  var player;

  function addTargets(layer, sprites) {
    layer.push(target(sprites, { x: 5, y: 1 }));
    layer.push(target(sprites, { x: 25, y: 1 }));
    layer.push(target(sprites, { x: 45, y: 1 }));
    layer.push(target(sprites, { x: 5, y: 19 }));
    layer.push(target(sprites, { x: 25, y: 19 }));
    layer.push(target(sprites, { x: 45, y: 19 }));
  }

  function addPlayer(layer, sprites) {
    player = require('../entity').player(sprites, { x: 28, y: 13 });
    layer.push(player);
  }

  function create(state) {
    var scene = {
      width: 60,
      height: 30,
      update: update,
      handleInput: handleInput,
      entities: []
    };

    function update(state) {}
    function handleInput(state, input) {
      var playerSpeed = 0.1;
      if (input.keyPressed('a')) {
        player.setX(player.getX() - playerSpeed);
      }
      if (input.keyPressed('d')) {
        player.setX(player.getX() + playerSpeed);
      }
      if (input.keyPressed('w')) {
        player.setY(player.getY() - playerSpeed);
      }
      if (input.keyPressed('s')) {
        player.setY(player.getY() + playerSpeed);
      }
    }

    addTargets(scene.entities, state.sprites);
    addPlayer(scene.entities, state.sprites);

    return scene;
  }

  return create;
});
