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
  var loadingBackground = loading.background(scene);
  var loadingForeground = loading.foreground(scene);
  var title = require('./splash_screen/title')(scene);
  var clickHereToStart = require('./splash_screen/click_here_to_start')(scene);
  var firstScreen = require('./first_screen');

  scene.layers.foreground.add(title);
  scene.layers.foreground.add(loadingBackground);
  scene.layers.foreground.add(loadingForeground);

  function update(state) {
    init(state);
    title.update(state);
  }

  function progress(percentage) {
    loadingForeground.setWidth(percentage * loadingBackground.getWidth());
  }

  function goToFirstScreen() {
    scene.state.changeSceneTo(firstScreen);
  }

  function complete(sprites) {
    scene.state.sprites = sprites;
    scene.layers.foreground.add(clickHereToStart);
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

  clickHereToStart.on('click', goToFirstScreen);

  return scene;
});
