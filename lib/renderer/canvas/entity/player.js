define(function (require) {
  var rectangle = require('./rectangle');

  function render(state, entity) {
    this.fillStyle = '#0f0';
    rectangle.call(this, state, entity);
  }

  return render;
});
