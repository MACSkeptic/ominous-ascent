define(function (require) {
  var support = require('./lib/support');

  QUnit.testStart(function () { support.globalStubs.requestAnimationFrame(); });
  QUnit.testDone(function () { support.globalStubs.restore(); });

  require('./tests/client');

  QUnit.start();
});
