define(function (require) {
  function create(scene) {
    return {
      type: 'title',
      text: 'ominous ascent',
      y: 150,
      x: scene.width / 2
    };
  }

  return create;
});
