define(function (require) {
  var scene = {
    width: 60,
    height: 30,
    initialised: false,
    update: update,
    targetSprite: undefined,
    layers: { foreground: new Kinetic.Layer() }
  };

  function update(state) {
    init(state);
  }

  function init(state) {
    if (scene.initialised) { return; }
    scene.initialised = true;
    scene.state = state;
    scene.targetSprite = _(state.sprites).find(function (image) {
      return (/\/sprites\/target\.png/).test(image.src);
    });

    scene.layers.foreground.add(new Kinetic.Image({
      name: 'target',
      x: 5,
      y: 1,
      width: 10,
      height: 10,
      image: scene.targetSprite
    }));

    scene.layers.foreground.add(new Kinetic.Image({
      name: 'target',
      x: 25,
      y: 1,
      width: 10,
      height: 10,
      image: scene.targetSprite
    }));

    scene.layers.foreground.add(new Kinetic.Image({
      name: 'target',
      x: 45,
      y: 1,
      width: 10,
      height: 10,
      image: scene.targetSprite
    }));

    scene.layers.foreground.add(new Kinetic.Image({
      name: 'target',
      x: 5,
      y: 19,
      width: 10,
      height: 10,
      image: scene.targetSprite
    }));

    scene.layers.foreground.add(new Kinetic.Image({
      name: 'target',
      x: 25,
      y: 19,
      width: 10,
      height: 10,
      image: scene.targetSprite
    }));

    scene.layers.foreground.add(new Kinetic.Image({
      name: 'target',
      x: 45,
      y: 19,
      width: 10,
      height: 10,
      image: scene.targetSprite
    }));
  }

  return scene;
});
