define(function (require) {
  var defaults = {
    width: 4,
    height: 4,
    type: 'player'
  };

  function create(sprites, specs) {
    return _(specs).defaults(defaults);
  }

  return create;
});
