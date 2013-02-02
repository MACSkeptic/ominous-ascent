define(function (require) {
  var scene = {
    initialised: false,
    width: 1000,
    height: 500,
    layers: { foreground: new Kinetic.Layer() },
    update: update
  };

  var imageLoader = require('../asset').imageLoader;
  var loading = require('./splash_screen/loading');
  var loadingForeground = loading.foreground(scene);
  var title = require('./splash_screen/title')(scene);

  scene.layers.foreground.add(title);
  scene.layers.foreground.add(loading.background(scene));
  scene.layers.foreground.add(loadingForeground);

  function update(state) {
    init(state);
    title.update(state);
  }

  function progress(percentage) {
    loadingForeground.setWidth(percentage * 900);
  }

  function complete(sprites) {
    scene.state.sprites = sprites;
  }

  function init(state) {
    if (scene.initialised) { return; }

    scene.state = state;
    scene.initialised = true;

    imageLoader.init({
      imagesToLoad: ['/media/sprites/target.gif', '/media/sprites/demon.png'],
      progress: progress,
      complete: complete
    });

    imageLoader.start();
  }

  return scene;
});
