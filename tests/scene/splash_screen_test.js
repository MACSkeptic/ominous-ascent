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

  function get(entities, type) {
    return _(entities).filter(function (entity) { return entity.type === type; });
  }

  test('title', function () {
    var title = get(splashScreen({}).entities, 'title')[0];
    equal(title.y, 150);
    equal(title.x, splashScreen({}).width / 2);
    equal(title.text, 'ominous ascent');
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
      ['/media/sprites/fireball.gif', '/media/sprites/target.png', '/media/sprites/demon.png']
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

    equal(get(instance.entities, 'press-enter-to-start').length, 0);
    asset.imageLoader.lastCall.args[0].complete([]);
    equal(get(instance.entities, 'press-enter-to-start').length, 1);

    var pressEnterToStart = get(instance.entities, 'press-enter-to-start')[0];
    equal(pressEnterToStart.y, 345);
    equal(pressEnterToStart.x, instance.width / 2);
    equal(pressEnterToStart.text, 'press enter to start');
  });

  test('no input handler', function () {
    ok(!splashScreen({}).handleInput);
  });

  test('input handler when loaded', function () {
    var state = { changeSceneTo: sinon.spy() };
    var instance = splashScreen(state);
    asset.imageLoader.lastCall.args[0].complete([]);
    ok(instance.handleInput);
    instance.handleInput({}, {
      keyPressed: sinon.stub().withArgs('enter').returns(true),
      clicked: sinon.stub()
    });
    equal(state.changeSceneTo.callCount, 1);
    equal(get(state.changeSceneTo.lastCall.args[0].entities, 'player').length, 1);
  });

  test('loading bar background', function () {
    var bar = get(splashScreen({}).entities, 'loading-bar-background')[0];
    equal(bar.width, 900);
    equal(bar.x, 500);
    equal(bar.height, 100);
    equal(bar.y, 350);
  });

  test('loading bar foreground', function () {
    var bar = get(splashScreen({}).entities, 'loading-bar-foreground')[0];

    equal(bar.width, 0);
    equal(bar.x, 500);
    equal(bar.height, 100);
    equal(bar.y, 350);

    asset.imageLoader.lastCall.args[0].progress(0.1);
    equal(bar.width, 900 * 0.1);

    asset.imageLoader.lastCall.args[0].progress(0.9);
    equal(bar.width, 900 * 0.9);

    asset.imageLoader.lastCall.args[0].progress(1);
    equal(bar.width, 900 * 1);
  });
});
