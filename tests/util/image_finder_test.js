define(function (require) {
  var imageFinder = require('../../lib/util/image_finder');

  module('image finder');

  test('finds image', function () {
    var images = [
      { src: '/wrong/image.png' },
      { src: '/right/image.png' },
      { src: '/right/image.gif' }
    ];

    equal(imageFinder(images, /right\/image\.png/), images[1]);
  });
});
