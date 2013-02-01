define(function (require) {
  var support = require('../lib/support');

  QUnit.testStart(function () { support.globalStubs.requestAnimationFrame(); });
  QUnit.testDone(function () { support.globalStubs.restore(); });

  require('./engine/engine_test');
  require('./engine/game_loop_test');
  require('./engine/shared_state_test');

  require('./scene/splash_screen_test');

  require('./renderer/canvas_test');

  require('./game/update_test');

  QUnit.start();
});
