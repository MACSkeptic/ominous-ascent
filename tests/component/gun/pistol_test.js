define(function (require) {
  var pistol = require('../../../lib/component').gun.pistol;
  var shot;
  var instance;

  function setup() {
    shot = sinon.stub();
    instance = pistol({}, shot);
  }

  module('pistol', { setup: setup });

  test('updates', function () {
    ok(instance.update);
  });
});
