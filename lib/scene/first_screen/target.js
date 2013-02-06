define(function (require) {
  var defaults = { radius: 5, type: 'target', image: undefined };

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
    return _(specs).defaults(defaults);
  }

  return create;
});
