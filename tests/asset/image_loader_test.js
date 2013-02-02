define(function (require) {
  var imageLoader = require('../../lib/asset/image_loader');

  module('image loader');

  test('loads all images and tracks progress along the way', function () {
    var complete = sinon.spy();
    var progress = sinon.spy();
    var imageWrapper = sinon.stub();
    var imagesToLoad = [ 'image1', 'image2', 'image3', 'image4' ];
    var images = _(imagesToLoad).map(function (image) { return { src: image }; });

    var specs = {
      complete: complete,
      image: imageWrapper, // this is optional and should be given only for testing
      progress: progress,
      imagesToLoad: imagesToLoad
    };

    var instance = imageLoader(specs);

    equal(imageWrapper.callCount, 0);

    instance.start();

    equal(imageWrapper.callCount, 4);

    equal(imageWrapper.firstCall.args[0], imagesToLoad[0]);
    equal(imageWrapper.secondCall.args[0], imagesToLoad[1]);
    equal(imageWrapper.thirdCall.args[0], imagesToLoad[2]);
    equal(imageWrapper.lastCall.args[0], imagesToLoad[3]);

    equal(progress.callCount, 0);

    imageWrapper.firstCall.args[1].apply(images[0]); // first image is loaded
    equal(complete.callCount, 0);
    equal(progress.callCount, 1);
    equal(progress.lastCall.args[0], 0.25); // 25% 1 out of 4 images

    imageWrapper.secondCall.args[1].apply(images[1]); // second image is loaded
    imageWrapper.thirdCall.args[1].apply(images[2]); // third image is loaded

    equal(complete.callCount, 0);
    equal(progress.callCount, 3);
    equal(progress.lastCall.args[0], 0.75); // 75% 3 out of 4 images

    imageWrapper.lastCall.args[1].apply(images[3]); // last image is loaded
    equal(complete.callCount, 1);
    deepEqual(complete.lastCall.args[0], images);
    equal(progress.callCount, 4);
    equal(progress.lastCall.args[0], 1); // 100% 4 out of 4 images
  });
});
