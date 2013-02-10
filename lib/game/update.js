define(function (require) {
  var inputHandler = require('./input');
  var input;
  var entityAndState = { entity: undefined, state: undefined };

  function updateAndActOnEntity(component) {
    component.update && component.update(entityAndState.state, entityAndState.entity);
    component.actOn && component.actOn(entityAndState.entity, entityAndState.state);
  }

  function updateEntity(entity) {
    entityAndState.entity = entity;
    entity.update && entity.update(entityAndState.state);
    _(entity.components).each(updateAndActOnEntity);
  }

  function update(state) {
    entityAndState.state = state;
    input.update && input.update(state);
    state.currentScene.handleInput && state.currentScene.handleInput(state, input);
    state.currentScene.update && state.currentScene.update(state);
    _(state.currentScene.entities).each(updateEntity);
  }

  function create(customInput) {
    input = customInput || input || inputHandler();
    return update;
  }

  return create;
});
