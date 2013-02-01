define(function (require) {
  var foreground,
      title,
      layers = {};

  title = new Kinetic.Text({
    text: 'ominous ascent',
    x: 500,
    y: 300,
    fill: '#000'
  });

  foreground = new Kinetic.Layer();
  foreground.add(title);

  layers.foreground = foreground;

  return { layers: layers };
});
