define(function (require) {
  var updateHandler = require('../../lib/game/update');
  var stubbedInput = { clicked: sinon.spy(), update: sinon.spy() };
  var update;

  function setup() { update = updateHandler(stubbedInput); }

  module('update', { setup: setup });

  test('updates current scene', function () {
    var callback = sinon.spy();
    var state = { currentScene: { update: callback } };
    update(state);
    ok(callback.calledWith(state));
  });

  test('auto updates all entities on current scene', function () {
    var callback = sinon.spy();
    var state = { currentScene: { entities: [ { update: callback } ] } };
    update(state);
    ok(callback.calledWith(state));
  });

  test('components act on entities', function () {
    var callback = sinon.spy();
    var state = { currentScene: { entities: [ { components: [ { actOn: callback } ] } ] } };
    update(state);
    ok(callback.calledWith(state.currentScene.entities[0], state));
  });

  test('components update', function () {
    var callback = sinon.spy();
    var state = { currentScene: { entities: [ { components: [ { update: callback } ] } ] } };
    update(state);
    ok(callback.calledWith(state, state.currentScene.entities[0]));
  });

  test('handle input current scene', function () {
    var callback = sinon.spy();
    var state = { currentScene: { handleInput: callback } };
    update(state);
    ok(callback.calledWith(state));
  });

  test('update input', function () {
    var state = { currentScene: { } };
    update(state);
    ok(stubbedInput.update.calledWith(state));
  });

  test('does not break if the current scene not have an update/handleInput callback', function () {
    expect(0);
    update({ currentScene: { } });
  });
});
