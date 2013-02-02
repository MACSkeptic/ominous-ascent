define(function (require) {
  var title = new Kinetic.Text({
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

  function update(state) {
    title.setShadowBlur(Math.random() * 100);
    title.setShadowOffset([ 5 - (Math.random() * 10), 5 - (Math.random() * 10) ]);
  }

  function create(scene) {
    title.setY(100);
    title.setX(scene.width / 2 - title.getWidth() / 2);
    title.update = update;
    return title;
  }

  return create;
});
