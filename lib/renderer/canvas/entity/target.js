define(function (require) {
  var circle = require('./circle');

  function render(state, entity) {
    this.fillStyle = '#f00';
    circle.call(this, state, entity);
  }

  return render;
});
