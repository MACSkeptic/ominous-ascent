define(function (require) {
  var scene = {
    width: 60,
    height: 30,
    initialised: false,
    update: update,
    layers: { foreground: new Kinetic.Layer() }
  };

  var target = require('./first_screen/target');

  function update(state) {
    init(state);
  }

  function init(state) {
    if (scene.initialised) { return; }
    scene.initialised = true;
    scene.state = state;

    addTargets();
  }

  function addTargets() {
    scene.layers.foreground.add(target(scene.state.sprites, { x: 5, y: 1 }));
    scene.layers.foreground.add(target(scene.state.sprites, { x: 25, y: 1 }));
    scene.layers.foreground.add(target(scene.state.sprites, { x: 45, y: 1 }));
    scene.layers.foreground.add(target(scene.state.sprites, { x: 5, y: 19 }));
    scene.layers.foreground.add(target(scene.state.sprites, { x: 25, y: 19 }));
    scene.layers.foreground.add(target(scene.state.sprites, { x: 45, y: 19 }));
  }

  return scene;
});
