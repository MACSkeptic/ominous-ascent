define(function (require) {
  var click = { x: 0, y: 0 };
  var input = { keyPressed: keyPressed, clicked: clicked };

  function keyPressed(name) {
    function ifItIsPressed(key) { return name === key; }
    return _(KeyboardJS.activeKeys()).find(ifItIsPressed);
  }

  function clicked() {
  }

  function create() {
    return input;
  }

  return create;
});
