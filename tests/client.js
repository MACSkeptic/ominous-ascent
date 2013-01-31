define(function (require) {
  var support = require('../lib/support');

  QUnit.testStart(function () { support.globalStubs.requestAnimationFrame(); });
  QUnit.testDone(function () { support.globalStubs.restore(); });

  require('./engine/game_loop_test');
  require('./engine/engine_test');

  QUnit.start();
});
