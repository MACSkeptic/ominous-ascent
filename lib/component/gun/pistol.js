define(function (require) {
  function update() {
  }

  function create() {
    return {
      update: update
    };
  }

  return create;
});
