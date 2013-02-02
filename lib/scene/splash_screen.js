define(function (require) {
  var asset = require('../asset');

  function create(state) {
    var scene = {
      width: 1000,
      height: 500,
      layers: { foreground: new Kinetic.Layer() },
      update: update
    };

    var loading = require('./splash_screen/loading');
    var loadingBackground = loading.background(scene);
    var loadingForeground = loading.foreground(scene);
    var title = require('./splash_screen/title')(scene);
    var pressEnterToStart = require('./splash_screen/press_enter_to_start')(scene);
    var firstScreen = require('./first_screen');

    scene.layers.foreground.add(title);
    scene.layers.foreground.add(loadingBackground);
    scene.layers.foreground.add(loadingForeground);

    function update(state) {
      title.update(state);
    }

    function progress(percentage) {
      loadingForeground.setWidth(percentage * loadingBackground.getWidth());
    }

    function goToFirstScreen() {
      state.changeSceneTo(firstScreen(state));
    }

    function handleInput(state, input) {
      if (input.keyPressed('enter')) {
        goToFirstScreen();
      }
    }

    function complete(sprites) {
      state.sprites = sprites;
      scene.layers.foreground.add(pressEnterToStart);
      scene.handleInput = handleInput;
    }

    asset.imageLoader({
      imagesToLoad: ['/media/sprites/target.png', '/media/sprites/demon.png'],
      progress: progress,
      complete: complete
    }).start();

    return scene;
  }

  return create;
});
