define(function (require) {
  var asset = require('../asset');

  function create(state) {
    var scene = {
      width: 1000,
      height: 500,
      entities: [],
      update: update
    };

    var loading = require('./splash_screen/loading');
    var loadingBackground = loading.background(scene);
    var loadingForeground = loading.foreground(scene);
    var title = require('./splash_screen/title')(scene);
    var pressEnterToStart = require('./splash_screen/press_enter_to_start')(scene);
    var firstScreen = require('./first_screen');

    scene.entities.push(title);
    scene.entities.push(loadingBackground);
    scene.entities.push(loadingForeground);

    function update(state) {}

    function progress(percentage) {
      loadingForeground.width = percentage * loadingBackground.width;
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
      scene.entities.push(pressEnterToStart);
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
