define(function (require) {
  var target = require('./first_screen/target');
  var player = require('./first_screen/player');

  function addTargets(layer, sprites) {
    layer.add(target(sprites, { x: 5, y: 1 }));
    layer.add(target(sprites, { x: 25, y: 1 }));
    layer.add(target(sprites, { x: 45, y: 1 }));
    layer.add(target(sprites, { x: 5, y: 19 }));
    layer.add(target(sprites, { x: 25, y: 19 }));
    layer.add(target(sprites, { x: 45, y: 19 }));
  }

  function addPlayer(layer, sprites) {
    layer.add(player(sprites, { x: 28, y: 13 }));
  }

  function create(state) {
    var scene = {
      width: 60,
      height: 30,
      update: update,
      layers: { foreground: new Kinetic.Layer() }
    };

    function update(state) {}

    addTargets(scene.layers.foreground, state.sprites);
    addPlayer(scene.layers.foreground, state.sprites);

    return scene;
  }

  return create;
});
