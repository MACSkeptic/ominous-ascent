define(function (require) {
  function create(width, height) {
    var stage;
    var foreground = new Kinetic.Layer();
    var background = new Kinetic.Layer();

    function draw(state) {
      updateScale(state.currentScene.width, state.currentScene.height);
      updateLayers(state.currentScene.layers.background, state.currentScene.layers.foreground);

      stage.draw();
    }

    function resize() {
      stage.setWidth(window.innerWidth);
      stage.setHeight(window.innerHeight);
    }

    function updateScale(width, height) {
      stage.setScale(stage.getWidth() / width, stage.getHeight() / height);
    }

    function updateLayers(newBackground, newForeground) {
      if (newForeground !== foreground || (newBackground || background) !== background) {
        stage.removeChildren();

        foreground = newForeground;
        background = newBackground || background;

        stage.add(background);
        stage.add(foreground);
      }
    }

    stage = new Kinetic.Stage({ container: 'container', width: width, height: height });
    $(window).on('resize', resize);

    return { callbacks: { draw: draw } };
  }

  return create;
});
