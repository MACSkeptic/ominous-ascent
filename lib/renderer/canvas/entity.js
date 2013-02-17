define(function (require) {
  var entityTypes = {
    'player': require('./entity/player'),
    'target': require('./entity/target'),
    'title': require('./entity/title'),
    'fireball': require('./entity/fireball'),
    'loading-bar-background': require('./entity/loading_bar_background'),
    'loading-bar-foreground': require('./entity/loading_bar_foreground'),
    'press-enter-to-start': require('./entity/press_enter_to_start')
  };

  function logNoRendererFoundForEntity(entity) {
    console.error('no renderer found for entity: ' + JSON.stringify(entity));
    console.log('available renderers:' + JSON.stringify(_(entityTypes).keys()));
  }

  function render(context, entity) {
    var renderer = entityTypes[entity.type];
    return renderer ? renderer.call(this, context, entity) : logNoRendererFoundForEntity(entity);
  }

  return { render: render };
});
