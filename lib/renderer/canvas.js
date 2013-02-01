define(function (require) {
  var stage,
      foreground = new Kinetic.Layer(),
      background = new Kinetic.Layer();

  function draw(engine) {
    updateLayers(engine.currentScene.layers.background, engine.currentScene.layers.foreground);

    stage.draw();
  }

  function init(width, height) {
    stage = new Kinetic.Stage({ container: 'container', width: width, height: height });
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

  return { init: init, callbacks: { draw: draw } };
});
