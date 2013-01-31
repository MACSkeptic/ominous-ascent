define(function (require) {
  var engine = require('../../lib/engine'),
      support = require('../../lib/support');


  module('engine - first invocation');

  test('var args callbacks only on dom ready', function () {
    var draw = sinon.spy(), update = sinon.spy(), game = sinon.spy();

    support.globalStubs.$();

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
});

