define(function (require) {
  var defaults = {
    x: 500,
    y: 350,
    height: 100
  };

  function background(scene) {
    return _({
      type: 'loading-bar-background',
      width: 900
    }).defaults(defaults);
  }

  function foreground(scene) {
    return _({
      type: 'loading-bar-foreground',
      width: 0
    }).defaults(defaults);
  }

  return {
    background: background,
    foreground: foreground
  };
});
