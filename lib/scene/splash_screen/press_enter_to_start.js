define(function (require) {
  function create(scene) {
    return {
      type: 'press-enter-to-start',
      y: 345,
      x: scene.width / 2,
      text: 'press enter to start'
    };
  }

  return create;
});
