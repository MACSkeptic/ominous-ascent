define(function (require) {
  function create(width, height) {
    var stage;
    var background = $('<canvas id="background">').attr({ width: width, height: height })[0];
    var foreground = $('<canvas id="foreground">').attr({ width: width, height: height })[0];
    var buffer = $('<canvas id="buffer">').attr({ width: width, height: height })[0];
    var context;
    var layerContext;
    var canvasEntity = require('./canvas/entity');

    function draw(state) {
      drawLayer(foreground, state);
    }

    function drawLayer(canvas, state) {
      context = contextOf(buffer);

      context.clearRect(0, 0, buffer.width, buffer.height);

      context.save();

      scale(buffer, state.currentScene);
      setDefaults();

      drawEntities(state);

      context.restore();

      layerContext = contextOf(canvas);
      layerContext.clearRect(0, 0, canvas.width, canvas.height);
      layerContext.drawImage(buffer, 0, 0);
    }

    function setDefaults() {
      context.font = '50px Sans-Serif';
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.lineWidth = '5';
      context.strokeStyle = '#fff';
      context.fillStyle = '#fff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
    }

    function drawEntities(state) {
      _(state.currentScene.entities).each(drawEntity, state);
    }

    function drawEntity(entity) {
      context.save();
      canvasEntity.render.call(context, this, entity);
      context.restore();
    }

    function scale(canvas, scene) {
      context.scale(canvas.width / scene.width, canvas.height / scene.height);
    }

    function contextOf(canvas) {
      return canvas.getContext('2d');
    }

    function resize(canvas) {
      resizeCanvas(background);
      resizeCanvas(foreground);
      resizeCanvas(buffer);
    }

    function resizeCanvas(canvas) {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    }

    $(window).on('resize', resize);
    $('body').append(background).append(foreground);

    return { callbacks: { draw: draw } };
  }

  return create;
});
