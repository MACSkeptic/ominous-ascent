define(function (require) {
  var foreground,
      title,
      layers = {};

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

  title.setY(window.innerHeight / 2 - title.getHeight() / 2);
  title.setX(window.innerWidth / 2 - title.getWidth() / 2);

  foreground = new Kinetic.Layer();
  foreground.add(title);

  layers.foreground = foreground;

  function update() {
    title.setShadowBlur(Math.random() * 100);
    title.setShadowOffset([
      5 - (Math.random() * 10),
      5 - (Math.random() * 10)
    ]);
  }

  return { layers: layers, update: update };
});
