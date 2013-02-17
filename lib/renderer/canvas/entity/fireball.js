define(function (require) {
  var image = require('./image');
  var imageRegex = /sprites\/fireball\.gif/;
  var imageFinder = require('../../../util/image_finder');
  var sprite;


  function render(state, entity) {
    sprite = sprite || imageFinder(state.sprites, imageRegex);
    entity.width = entity.radius * 2;
    entity.height = entity.radius * 2;
    image.call(this, sprite, entity);
  }

  return render;
});
