define(function (require) {
  var splashScreen = require('../../lib/scene/splash_screen');
  var imageLoader = require('../../lib/asset').imageLoader;

  module('splash screen', {
    setup: function () {
      splashScreen.initialised = false;
      var clickHereToStart = splashScreen.layers.foreground.get('#click-here-to-start')[0];
      if (clickHereToStart) { clickHereToStart.remove(); }
      sinon.spy(imageLoader, 'init');
      sinon.stub(imageLoader, 'start');
    },
    teardown: function () {
      imageLoader.init.restore();
      imageLoader.start.restore();
    }
  });

  test('title', function () {
    var title = splashScreen.layers.foreground.get('Text')[0];
    equal(title.getY(), 100);
    equal(title.getX(), splashScreen.width / 2 - title.getWidth() / 2);
    equal(title.getText(), 'ominous ascent');
  });

  test('dimensions', function () {
    equal(splashScreen.width, 1000);
    equal(splashScreen.height, 500);
  });

  test('init/start image loader only once', function () {
    splashScreen.update({});
    equal(imageLoader.init.callCount, 1);
    equal(imageLoader.start.callCount, 1);
    splashScreen.update({});
    equal(imageLoader.init.callCount, 1);
    equal(imageLoader.start.callCount, 1);
  });

  test('load sprites', function () {
    splashScreen.update({});
    deepEqual(
      imageLoader.init.lastCall.args[0].imagesToLoad,
      ['/media/sprites/target.png', '/media/sprites/demon.png']
    );
  });

  test('store sprites on the state', function () {
    var state = {};
    var sprites = ['/media/sprites/target.png', '/media/sprites/demon.png'];

    splashScreen.update(state);
    imageLoader.init.lastCall.args[0].complete(sprites);

    deepEqual(state.sprites, sprites);
  });

  test('click here to start', function () {
    var state = { changeSceneTo: sinon.stub() };
    splashScreen.update(state);

    equal(splashScreen.layers.foreground.get('#click-here-to-start').length, 0);
    imageLoader.init.lastCall.args[0].complete([]);
    equal(splashScreen.layers.foreground.get('#click-here-to-start').length, 1);

    var clickHereToStart = splashScreen.layers.foreground.get('#click-here-to-start')[0];
    equal(clickHereToStart.getY(), 355);
    equal(clickHereToStart.getX(), splashScreen.width / 2 - clickHereToStart.getWidth() / 2);
    equal(clickHereToStart.getText(), 'click here to start');

    clickHereToStart.fire('click');
    equal(state.changeSceneTo.callCount, 1);
  });

  test('loading bar background', function () {
    equal(splashScreen.layers.foreground.get('#loading-bar-background').length, 1);

    var bar = splashScreen.layers.foreground.get('#loading-bar-background')[0];
    equal(bar.getWidth(), 900);
    equal(bar.getX(), 50);
    equal(bar.getHeight(), 100);
    equal(bar.getY(), 350);
  });

  test('loading bar foreground', function () {
    splashScreen.update({});

    equal(splashScreen.layers.foreground.get('#loading-bar-foreground').length, 1);

    var bar = splashScreen.layers.foreground.get('#loading-bar-foreground')[0];

    equal(bar.getWidth(), 0);
    equal(bar.getX(), 50);
    equal(bar.getHeight(), 100);
    equal(bar.getY(), 350);

    imageLoader.init.lastCall.args[0].progress(0.1);
    equal(bar.getWidth(), 900 * 0.1);

    imageLoader.init.lastCall.args[0].progress(0.9);
    equal(bar.getWidth(), 900 * 0.9);

    imageLoader.init.lastCall.args[0].progress(1);
    equal(bar.getWidth(), 900 * 1);
  });
});
