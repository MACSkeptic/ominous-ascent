define(function (require) {
  var engine = require('../../lib/engine'),
      support = require('../../lib/support');

  module('engine', { 
    setup: support.globalStubs.$,
    teardown: support.globalStubs.restore
  });

  test('var args callbacks only on dom ready', function () {
    var draw = sinon.spy(), update = sinon.spy(), game = sinon.spy();

    engine.start({ draw: draw }, { update: update }, { game: game });

    ok($.called);

    ok(!game.called);
    ok(!draw.called);
    ok(!update.called);

    $.lastCall.args[0]();

    ok(game.called);
    ok(draw.called);
    ok(update.called);
  });

  test('init', function () {
    engine.init('firstScene');

    var callback = sinon.spy();

    engine.start({ game: callback });

    $.lastCall.args[0]();

    equal(callback.lastCall.args[0].currentScene, 'firstScene');
  });
});

