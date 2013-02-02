define(function (require) {
  var foreground,
      title,
      loadingForeground,
      loadingBackground,
      layers = {},
      imageLoader = require('../asset').imageLoader,
      scene = { initialised: false, width: 1000, height: 500 };

  title = new Kinetic.Text({
    text: 'ominous ascent',
    fontSize: 100,
    fontFamily: 'Sans-Serif',
    shadowOffset: [5, 5],
    shadowColor: '#ff0',
    shadowBlur: 5,
    shadowOpacity: 1,
    fill: '#fdd',
    stroke: '#fff',
    strokeWidth: 3
  });

  title.setY(100);
  title.setX(scene.width / 2 - title.getWidth() / 2);

  loadingBackground = new Kinetic.Rect({
    id: 'loading-bar-background',
    fill: '#000',
    width: 900,
    x: 50,
    y: 350,
    height: 100
  });

  loadingForeground = new Kinetic.Rect({
    id: 'loading-bar-foreground',
    fill: '#f00',
    width: 0,
    x: 50,
    y: 350,
    height: 100
  });

  foreground = new Kinetic.Layer();
  foreground.add(title);
  foreground.add(loadingBackground);
  foreground.add(loadingForeground);

  layers.foreground = foreground;

  function update(state) {
    init(state);
    title.setShadowBlur(Math.random() * 100);
    title.setShadowOffset([
      5 - (Math.random() * 10),
      5 - (Math.random() * 10)
    ]);
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

  return _(scene).extend({ layers: layers, update: update });
});
