define(function (require) {
  var text = new Kinetic.Text({
    id: 'click-here-to-start',
    text: 'click here to start',
    fontSize: 90,
    fontFamily: 'Sans-Serif',
    shadowOffset: [1, 1],
    shadowColor: '#ff0',
    shadowBlur: 5,
    shadowOpacity: 1,
    fill: '#fff',
    stroke: '#ff0',
    strokeWidth: 3
  });

  function mousein() { text.setFill('#f00'); }
  function mouseout() { text.setFill('#fff'); }

  function create(scene, callback) {
    text.setY(355);
    text.setX(scene.width / 2 - text.getWidth() / 2);
    text.on('mouseover', mousein);
    text.on('mouseout', mouseout);
    text.on('click', callback); // this is horrible and most likely should not be used
    return text;
  }

  return create;
});
