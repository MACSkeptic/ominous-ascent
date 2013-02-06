define(function (require) {
  function create(width, height) {
    var stage;
    var background = $('<canvas>').attr({ id: 'background', width: width, height: height })[0];
    var foreground = $('<canvas>').attr({ id: 'foreground', width: width, height: height })[0];
    var context;
    var canvasEntity = require('./canvas/entity');

    function draw(state) {
      drawLayer(foreground, state.currentScene);
    }

    function drawLayer(canvas, scene) {
      context = contextOf(foreground);

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.save();

      scale(canvas, scene);
      setDefaults();

      drawEntities(scene.entities);

      context.restore();
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

    function drawEntities(entities) {
      _(entities).each(drawEntity);
    }

    function drawEntity(entity) {
      context.save();
      canvasEntity.render(context, entity);
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
