define(function (require) {
  var rectangle = require('./rectangle');

  function render(context, entity) {
    context.fillStyle = '#f00';
    rectangle(context, entity);
  }

  return render;
});
