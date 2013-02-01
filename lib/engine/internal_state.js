define(function (require) {
  return {
    lastLoop: undefined,
    callbacks: {
      update: function () {},
      draw: function () {},
      game: function () {}
    }
  };
});
