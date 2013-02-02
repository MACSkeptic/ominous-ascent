define(function (require) {
  var text = new Kinetic.Text({
    id: 'press-enter-to-start',
    text: 'press enter to start',
    fontSize: 85,
    fontFamily: 'Sans-Serif',
    shadowOffset: [1, 1],
    shadowColor: '#ff0',
    shadowBlur: 5,
    shadowOpacity: 1,
    fill: '#fff',
    stroke: '#ff0',
    strokeWidth: 3
  });

  function create(scene) {
    text.setY(355);
    text.setX(scene.width / 2 - text.getWidth() / 2);
    return text;
  }

  return create;
});
