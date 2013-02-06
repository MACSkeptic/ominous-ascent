define(function (require) {
  function render(context, entity) {
    context.fillStyle = '#000';
    context.fillRect(
      entity.x,
      entity.y,
      entity.width,
      entity.height
    );
  }

  return render;
});
