define(function (require) {
  var click = { x: 0, y: 0 };
  var scaled = { x: 0, y: 0 };
  var mouseIsDown = false;
  var input = { keyPressed: keyPressed, clicked: clicked };

  function keyPressed(name) {
    function ifItIsPressed(key) { return name === key; }
    return _(KeyboardJS.activeKeys()).find(ifItIsPressed);
  }

  function scale(click, dimensions) {
    scaled.x = click.x * (dimensions.width / window.innerWidth);
    scaled.y = click.y * (dimensions.height / window.innerHeight);
    return scaled;
  }

  function clicked(dimensions) {
    return mouseIsDown && scale(click, dimensions);
  }

  function mousedown() { mouseIsDown = true; return false; }
  function mouseup() { mouseIsDown = false; return false; }

  function mousemove(e) {
    click.x = e.clientX;
    click.y = e.clientY;
    return false;
  }

  function create() {
    $('body').on('mousedown', mousedown).on('mouseup', mouseup).on('mousemove', mousemove);
    return input;
  }

  return create;
});
