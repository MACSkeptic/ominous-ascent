define(function (require) {
  var twoPies = Math.PI * 2;

  function render(context, entity) {
    context.arc(entity.x, entity.y, entity.radius, 0, twoPies);
    context.fill();
  }

  return render;
});
