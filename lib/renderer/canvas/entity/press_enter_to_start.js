define(function (require) {
  var text = require('./text');

  function render(context, entity) {
    context.fillStyle = '#ff0';
    context.font = '90px sans-serif';
    text(context, entity);
  }

  return render;
});
