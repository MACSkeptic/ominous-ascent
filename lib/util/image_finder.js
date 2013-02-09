define(function (require) {
  function imageFrom(sprites, regex) {
    return _(sprites).find(theTargetImage, regex);
  }

  function theTargetImage(imageElement) {
    return (this).test(imageElement.src);
  }

  return imageFrom;
});
