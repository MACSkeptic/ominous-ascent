define(function (require) {
  var splashScreen = require('../../lib/scene/splash_screen');
  var asset = require('../../lib/asset');
  var imageLoader;

  module('splash screen', {
    setup: function () {
      imageLoader = { start: sinon.spy() };
      sinon.stub(asset, 'imageLoader').returns(imageLoader);
    },
    teardown: function () {
      asset.imageLoader.restore();
    }
  });

  test('title', function () {
    var title = splashScreen({}).layers.foreground.get('Text')[0];
    equal(title.getY(), 100);
    equal(title.getX(), splashScreen().width / 2 - title.getWidth() / 2);
    equal(title.getText(), 'ominous ascent');
  });

  test('dimensions', function () {
    equal(splashScreen({}).width, 1000);
    equal(splashScreen({}).height, 500);
  });

  test('init/start image loader only once', function () {
    splashScreen({});
    equal(asset.imageLoader.callCount, 1);
    equal(imageLoader.start.callCount, 1);
  });

  test('load sprites', function () {
    splashScreen({});
    deepEqual(
      asset.imageLoader.lastCall.args[0].imagesToLoad,
      ['/media/sprites/target.png', '/media/sprites/demon.png']
    );
  });

  test('store sprites on the state', function () {
    var state = {};
    var sprites = ['/media/sprites/target.png', '/media/sprites/demon.png'];

    splashScreen(state);
    asset.imageLoader.lastCall.args[0].complete(sprites);

    deepEqual(state.sprites, sprites);
  });

  test('press enter to start', function () {
    var state = { changeSceneTo: sinon.stub() };
    var instance = splashScreen(state);

    equal(instance.layers.foreground.get('#press-enter-to-start').length, 0);
    asset.imageLoader.lastCall.args[0].complete([]);
    equal(instance.layers.foreground.get('#press-enter-to-start').length, 1);

    var clickHereToStart = instance.layers.foreground.get('#press-enter-to-start')[0];
    equal(clickHereToStart.getY(), 355);
    equal(clickHereToStart.getX(), instance.width / 2 - clickHereToStart.getWidth() / 2);
    equal(clickHereToStart.getText(), 'press enter to start');
  });

  test('no input handler', function () {
    ok(!splashScreen({}).handleInput);
  });

  test('input handler when loaded', function () {
    var state = { changeSceneTo: sinon.spy() };
    var instance = splashScreen(state);
    asset.imageLoader.lastCall.args[0].complete([]);
    ok(instance.handleInput);
    instance.handleInput({}, { keyPressed: sinon.stub().withArgs('enter').returns(true) });
    equal(state.changeSceneTo.callCount, 1);
    equal(state.changeSceneTo.lastCall.args[0].layers.foreground.get('.player').length, 1);
  });

  test('loading bar background', function () {
    var bar = splashScreen({}).layers.foreground.get('#loading-bar-background')[0];
    equal(bar.getWidth(), 900);
    equal(bar.getX(), 50);
    equal(bar.getHeight(), 100);
    equal(bar.getY(), 350);
  });

  test('loading bar foreground', function () {
    var bar = splashScreen({}).layers.foreground.get('#loading-bar-foreground')[0];

    equal(bar.getWidth(), 0);
    equal(bar.getX(), 50);
    equal(bar.getHeight(), 100);
    equal(bar.getY(), 350);

    asset.imageLoader.lastCall.args[0].progress(0.1);
    equal(bar.getWidth(), 900 * 0.1);

    asset.imageLoader.lastCall.args[0].progress(0.9);
    equal(bar.getWidth(), 900 * 0.9);

    asset.imageLoader.lastCall.args[0].progress(1);
    equal(bar.getWidth(), 900 * 1);
  });
});
