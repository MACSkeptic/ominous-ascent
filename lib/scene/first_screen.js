define(function (require) {
  var target = require('./first_screen/target');
  var player;

  function addTargets(layer, sprites) {
    layer.push(target(sprites, { x: 10, y: 6 }));
    layer.push(target(sprites, { x: 30, y: 6 }));
    layer.push(target(sprites, { x: 50, y: 6 }));
    layer.push(target(sprites, { x: 10, y: 24 }));
    layer.push(target(sprites, { x: 30, y: 24 }));
    layer.push(target(sprites, { x: 50, y: 24 }));
  }

  function addPlayer(layer, sprites) {
    player = require('../entity').player({ x: 30, y: 15 });
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

    function update(state) {
    }

    function handleInput(state, input) {
      player.handleInput(state, input);
    }

    addTargets(scene.entities, state.sprites);
    addPlayer(scene.entities, state.sprites);

    return scene;
  }

  return create;
});
