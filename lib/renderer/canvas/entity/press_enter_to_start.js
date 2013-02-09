define(function (require) {
  var text = require('./text');

  function render(state, entity) {
    this.fillStyle = '#ff0';
    this.font = '90px sans-serif';
    text.call(this, state, entity);
  }

  return render;
});
