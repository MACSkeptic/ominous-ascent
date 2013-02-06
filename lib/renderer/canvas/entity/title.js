define(function (require) {
  var text = require('./text');

  function render(context, entity) {
    context.fillStyle = '#ff0';
    context.font = '100px sans-serif';
    text(context, entity);
  }

  return render;
});
