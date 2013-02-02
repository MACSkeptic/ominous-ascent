define(function (require) {
  var properties = {
    image: require('../wrapper').image,
    complete: noop,
    progress: noop,
    calculatedProgress: 0,
    imagesLoaded: [],
    imagesToLoad: []
  };

  function noop() {}

  function calculateProgress() {
    properties.calculatedProgress = properties.imagesLoaded.length / properties.imagesToLoad.length;
  }

  function imageLoaded() {
    properties.imagesLoaded.push(this); // native browser onload event sets the image as "this"
    calculateProgress();
    properties.progress(properties.calculatedProgress);

    if (properties.calculatedProgress > 0.9999) { complete(); }
  }

  function complete() {
    properties.complete(properties.imagesLoaded);
  }

  function load(image) {
    properties.image(image, imageLoaded);
  }

  function init(specs) {
    _(properties).extend(specs);
  }

  function start() {
    _(properties.imagesToLoad).each(load);
  }

  return {
    init: init,
    start: start
  };
});
