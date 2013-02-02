define(function (require) {

  function keyPressed(name) {
    function ifItIsPressed(key) { return name === key; }
    return _(KeyboardJS.activeKeys()).find(ifItIsPressed);
  }

  return { keyPressed: keyPressed };
});
