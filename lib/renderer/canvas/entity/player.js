define(function (require) {
  var image = require('./image');
  var imageRegex = /sprites\/demon\.png/;
  var imageFinder = require('../../../util/image_finder');
  var sprite;

  function render(state, entity) {
    sprite = sprite || imageFinder(state.sprites, imageRegex);
    image.call(this, sprite, entity);
  }

  return render;
});
