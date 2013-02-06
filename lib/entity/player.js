define(function (require) {
  var defaults = {
    width: 4,
    height: 4,
    type: 'player',
    image: undefined
  };

  function findImage(sprites) {
    defaults.image = defaults.image || imageFrom(sprites);
  }

  function imageFrom(sprites) {
    return _(sprites).find(theTargetImage);
  }

  function theTargetImage(image) {
    return (/\/sprites\/demon\.png/).test(image.src);
  }

  function create(sprites, specs) {
    //findImage(sprites);
    return _(specs).defaults(defaults);
  }

  return create;
});
