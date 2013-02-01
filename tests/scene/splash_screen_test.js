define(function (require) {
  var splashScreen = require('../../lib/scene/splash_screen');

  module('splash screen');

  test('title', function () {
    equal(splashScreen.layers.foreground.get('Text').length, 1);
    equal(splashScreen.layers.foreground.get('Text')[0].getText(), 'ominous ascent');
  });
});
