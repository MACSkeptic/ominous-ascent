define(function (require) {
  var entityTypes = {
    'player': require('./entity/player'),
    'target': require('./entity/target'),
    'title': require('./entity/title'),
    'loading-bar-background': require('./entity/loading_bar_background'),
    'loading-bar-foreground': require('./entity/loading_bar_foreground'),
    'press-enter-to-start': require('./entity/press_enter_to_start')
  };

  function logNoRendererFoundForEntity(entity) {
    console.error('no renderer found for entity: ' + JSON.stringify(entity));
    console.log('available renderers:' + JSON.stringify(_(entityTypes).keys()));
  }

  function applyRenderer(renderer, context, entity) {
    return renderer && renderer(context, entity);
    logNoRendererFoundForEntity(entity);
  }

  function render(context, entity) {
    applyRenderer(entityTypes[entity.type], context, entity);
  }

  return { render: render };
});
