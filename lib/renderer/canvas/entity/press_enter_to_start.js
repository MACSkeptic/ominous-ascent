define(function (require) {
  function render(context, entity) {
    context.fillStyle = '#ff0';
    context.font = '90px sans-serif';
    context.fillText(
      entity.text,
      entity.x,
      entity.y
    );
  }

  return render;
});
