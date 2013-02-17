define(function (require) {
  var defaults = {
    type: 'fireball',
    radius: 2,
    components: [ require('../../component').movement() ]
  };

  function create(specs) {
    return _(specs).defaults(defaults);
  }

  return create;
});
