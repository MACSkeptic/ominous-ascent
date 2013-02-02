define(function (require) {
  function background(scene) {
    return new Kinetic.Rect({
      id: 'loading-bar-background',
      fill: '#000',
      width: 900,
      x: 50,
      y: 350,
      height: 100
    });
  }

  function foreground(scene) {
    return new Kinetic.Rect({
      id: 'loading-bar-foreground',
      fill: '#f00',
      width: 0,
      x: 50,
      y: 350,
      height: 100
    });
  }

  return {
    background: background,
    foreground: foreground
  };
});
