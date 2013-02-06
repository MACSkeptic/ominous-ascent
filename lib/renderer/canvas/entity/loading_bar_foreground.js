define(function (require) {
  function render(context, entity) {
    context.fillStyle = '#f00';
    context.fillRect(
      entity.x,
      entity.y,
      entity.width,
      entity.height
    );
  }

  return render;
});
