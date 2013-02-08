define(function (require) {
  var inputHandler = require('../../lib/game/input');
  var input;
  var mousedown, mouseup, mousemove;
  var support = require('../../lib/support');

  function setup() {
    support.globalStubs.$();
    support.keyboardStubs.activeKeys();
    $.withArgs('body').returns({
      on: function (eventType, callback) {
        mousemove = (eventType === 'mousemove' && callback) || mousemove;
        mouseup = (eventType === 'mouseup' && callback) || mouseup;
        mousedown = (eventType === 'mousedown' && callback) || mousedown;
        return this;
      }
    });
    input = inputHandler();
  }

  function teardown() {
    support.globalStubs.restore();
    support.keyboardStubs.restore();
  }

  module('input', { setup: setup, teardown: teardown });

  test('key pressed', function () {
    ok(!input.keyPressed('a'));
    KeyboardJS.activeKeys.returns(['a']);
    ok(input.keyPressed('a'));
  });

  test('mouse is clicked', function () {
    ok(!input.clicked({}));
    mousedown();
    ok(!input.clicked({}));
    mouseup();
    ok(!input.clicked({}));
    input.update();
    ok(input.clicked({}));
    mousedown();
    input.update();
    ok(input.clicked({}));
    mouseup();
    input.update();
    ok(!input.clicked({}));
  });

  test('scales the click', function () {
    mousedown();
    mousemove({ clientX: 100, clientY: 50 });
    input.update();
    QUnit.close(input.clicked({ width: 40, height: 25 }).x, 100 * 40 / window.innerWidth, 0.01);
    QUnit.close(input.clicked({ width: 40, height: 25 }).y, 50 * 25 / window.innerHeight, 0.01);
  });
});
