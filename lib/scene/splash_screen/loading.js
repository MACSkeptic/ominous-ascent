define(function (require) {
  var defaults = {
    x: 50,
    y: 350,
    height: 100
  };

  function background(scene) {
    return _({
      type: 'loading-bar-background',
      fill: '#000',
      width: 900
    }).defaults(defaults);
  }

  function foreground(scene) {
    return _({
      type: 'loading-bar-foreground',
      fill: '#f00',
      width: 0
    }).defaults(defaults);
  }

  return {
    background: background,
    foreground: foreground
  };
});
