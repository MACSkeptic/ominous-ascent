define(function (require) {
  var twoPies = Math.PI * 2;

  function render(state, entity) {
    this.beginPath();
    this.arc(entity.x, entity.y, entity.radius, 0, twoPies);
    this.closePath();
    this.fill();
  }

  return render;
});
