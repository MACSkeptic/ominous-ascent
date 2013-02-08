define(function (require) {
  var click = { x: 0, y: 0 };
  var scaled = { x: 0, y: 0 };
  var mouseDown = false;
  var mouseUp = false;
  var mouseIsDown = false;
  var input = { keyPressed: keyPressed, clicked: clicked, update: update };

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

  function update(state) {
    mouseIsDown = mouseDown || (mouseIsDown && !mouseUp);
    if (!mouseDown) { mouseUp = false; }
    mouseDown = false;
  }

  function mousedown() { mouseDown = true; mouseUp = false; return false; }
  function mouseup() { mouseUp = true; return false; }

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
