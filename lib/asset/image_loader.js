define(function (require) {
  function noop() {}

  function create(specs) {
    var loader = _({
      image: require('../wrapper').image,
      complete: noop,
      progress: noop,
      calculatedProgress: 0,
      imagesLoaded: [],
      imagesToLoad: []
    }).extend(specs);

    function calculateProgress() {
      loader.calculatedProgress = loader.imagesLoaded.length / loader.imagesToLoad.length;
    }

    function imageLoaded() {
      loader.imagesLoaded.push(this); // native browser onload event sets the image as "this"
      calculateProgress();
      loader.progress(loader.calculatedProgress);

      if (loader.calculatedProgress > 0.9999) { complete(); }
    }

    function complete() {
      loader.complete(loader.imagesLoaded);
    }

    function load(image) {
      loader.image(image, imageLoaded);
    }

    function start() {
      _(loader.imagesToLoad).each(load);
    }

    return { start: start };
  }

  return create;
});
