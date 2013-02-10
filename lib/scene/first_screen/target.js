define(function (require) {
  var defaults = { radius: 5, type: 'target' };

  function create(specs) {
    return _(specs).defaults(defaults);
  }

  return create;
});
