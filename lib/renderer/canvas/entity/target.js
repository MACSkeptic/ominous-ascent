define(function (require) {
  var circle = require('./circle');

  function render(context, entity) {
    context.fillStyle = '#f00';
    circle(context, entity);
  }

  return render;
});
