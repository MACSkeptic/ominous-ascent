define(function (require) {
  function create(uri, callback) {
    var image = new Image();

    image.onload = callback;
    image.src = uri;

    return image;
  }

  return create;
});
