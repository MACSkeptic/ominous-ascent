define(function (require) {
  function render(context, entity) {
    context.fillText(entity.text, entity.x, entity.y);
  }

  return render;
});
