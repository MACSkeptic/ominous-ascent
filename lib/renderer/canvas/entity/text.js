define(function (require) {
  function render(state, entity) {
    this.fillText(entity.text, entity.x, entity.y);
  }

  return render;
});
