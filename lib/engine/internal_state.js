define(function (require) {
  function noop() {}

  return { lastLoop: undefined, callbacks: { update: noop, draw: noop, game: noop } };
});
