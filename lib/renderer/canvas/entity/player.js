define(function (require) {
  var rectangle = require('./rectangle');

  function render(context, entity) {
    context.fillStyle = '#0f0';
    rectangle(context, entity);
  }

  return render;
});
