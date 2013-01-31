define(function (require) {
  var stage, background, foreground;

  function draw() {
    stage.draw();
  }

  function init() {
    stage = new Kinetic.Stage({
      container: 'container',
      width: 578,
      height: 200
    });

    background = new Kinetic.Layer();

    var back = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: 1000,
      height: 1000,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4
    });
    
    foreground = new Kinetic.Layer();

    var fore = new Kinetic.Rect({
      x: 239,
      y: 75,
      width: 100,
      height: 50,
      fill: 'yellow',
      stroke: 'blue',
      strokeWidth: 4
    });

    // add the shape to the layer
    background.add(back);
    foreground.add(fore);

    // add the layer to the stage
    stage.add(background);
    stage.add(foreground);
  }

  return { init: init, callbacks: { draw: draw } };
});
