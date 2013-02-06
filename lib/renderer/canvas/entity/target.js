define(function (require) {
  function render(context, entity) {
    context.fillStyle = '#f00';
    context.arc(entity.x, entity.y, entity.radius, 0, Math.PI * 2);
    context.fill();
  }

  return render;
});
