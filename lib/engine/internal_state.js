define(function (require) {
  function noop() {}

  function create() {
    return { lastLoop: undefined, callbacks: { update: noop, draw: noop, game: noop } };
  }

  return create;
});
