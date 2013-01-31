define(function (require) {
  var backgroundCanvas,
      foregroundCanvas,
      hiddenCanvas,

      backgroundContext,
      foregroundContext,
      hiddenContext,

      widthRatio = 0,
      heightRatio = 0,

      renderers = {};

  function draw(engine) {
    //TODO: game draw logic goes here
  }

  function render(scene) {
    hiddenContext.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);

    hiddenContext.save();

    heightRatio = hiddenCanvas.height / scene.renderHeight;
    widthRatio = hiddenCanvas.width / scene.renderWidth;

    hiddenContext.scale(widthRatio, heightRatio);

    foregroundContext.clearRect(0, 0, foregroundCanvas.width, foregroundCanvas.height);
    foregroundContext.drawImage(hiddenCanvas, 0, 0);

    hiddenContext.restore();
  }

  function createCanvas(id) {
    return $('<canvas>', { 'id': id })[0];
  }

  function contextOf(canvas) {
    var context = canvas.getContext('2d');
    $(canvas).attr({ 'width': window.innerWidth, 'height': window.innerHeight });
    return context;
  }

  function resize() { reset(); }

  function reset() {
    backgroundContext = contextOf(backgroundCanvas);
    foregroundContext = contextOf(foregroundCanvas);
    hiddenContext = contextOf(hiddenCanvas);

    backgroundContext.fillStyle = '#000';
    backgroundContext.fillRect(0, 0,  backgroundCanvas.width, backgroundCanvas.height);

    hiddenContext.lineWidth = 3;
    hiddenContext.capStyle = 'round';
    hiddenContext.joinStyle = 'round';
  }

  function init() {
    backgroundCanvas = createCanvas('background');
    foregroundCanvas = createCanvas('foreground');
    hiddenCanvas = createCanvas('hidden');

    $('body').append(backgroundCanvas).append(foregroundCanvas);

    resize();

    $(window).on('resize', resize);
  }

  return { init: init, callbacks: { draw: draw } };
});
