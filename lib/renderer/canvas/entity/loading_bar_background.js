define(function (require) {
  var rectangle = require('./rectangle');

  function render(state, entity) {
    this.fillStyle = '#000';
    rectangle.call(this, state, entity);
  }

  return render;
});
