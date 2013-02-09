define(function (require) {
  function render(image, entity) {
    entity.halfWidth = entity.width / 2;
    entity.halfHeight = entity.height / 2;
    this.drawImage(
      image,
      entity.x - entity.halfWidth,
      entity.y - entity.halfHeight,
      entity.width,
      entity.height
    );
  }

  return render;
});
