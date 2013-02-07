define(function (require) {
  var twoPies = Math.PI * 2;

  function render(context, entity) {
    context.beginPath();
    context.arc(entity.x, entity.y, entity.radius, 0, twoPies);
    context.closePath();
    context.fill();
  }

  return render;
});
