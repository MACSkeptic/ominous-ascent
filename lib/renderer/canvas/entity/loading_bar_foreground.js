define(function (require) {
  var rectangle = require('./rectangle');

  function render(state, entity) {
    this.fillStyle = '#f00';
    rectangle.call(this, state, entity);
  }

  return render;
});
