define(function (require) {
  var defaults = { width: 10, height: 10, name: 'target', image: undefined };

  function findImage(sprites) {
    defaults.image = defaults.image || imageFrom(sprites);
  }

  function imageFrom(sprites) {
    return _(sprites).find(theTargetImage);
  }

  function theTargetImage(image) {
    return (/\/sprites\/target\.png/).test(image.src);
  }

  function create(sprites, specs) {
    findImage(sprites);
    return new Kinetic.Image(_(specs).defaults(defaults));
  }

  return create;
});
