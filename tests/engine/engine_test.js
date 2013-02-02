define(function (require) {
  var engine = require('../../lib/engine');
  var support = require('../../lib/support');
  var firstScene = function () { return 'firstScene'; };

  module('engine', {
    setup: support.globalStubs.$,
    teardown: support.globalStubs.restore
  });

  test('var args callbacks only on dom ready', function () {
    var draw = sinon.spy(), update = sinon.spy(), game = sinon.spy();

    engine(firstScene).start({ draw: draw }, { update: update }, { game: game });

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
    var callback = sinon.spy();

    engine(firstScene).start({ game: callback });

    $.lastCall.args[0]();

    equal(callback.lastCall.args[0].currentScene, 'firstScene');
  });
});

