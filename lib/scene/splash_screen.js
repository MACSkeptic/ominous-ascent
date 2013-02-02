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

  title.setY(500 / 2 - title.getHeight() / 2);
  title.setX(1000 / 2 - title.getWidth() / 2);

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

  return { width: 1000, height: 500, layers: layers, update: update };
});
