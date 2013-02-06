define(function (require) {
  var rectangle = require('./rectangle');

  function render(context, entity) {
    context.fillStyle = '#000';
    rectangle(context, entity);
  }

  return render;
});
