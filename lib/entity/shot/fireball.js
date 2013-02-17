define(function (require) {
  var defaults = {
    type: 'fireball',
    radius: 2
  };

  function create(specs) {
    return _(specs).defaults(defaults);
  }

  return create;
});
