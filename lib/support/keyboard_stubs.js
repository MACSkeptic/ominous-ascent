define(function (require) {
  var thingsToRestore = [];

  function restore(name) {
    if (name) { return KeyboardJS[name].restore(); }
    _(thingsToRestore).each(restore);
    thingsToRestore = [];
  }

  function stub(name) {
    sinon.stub(KeyboardJS, name);
    thingsToRestore.push(name);
  }

  function activeKeys() { stub('activeKeys'); }

  return {
    activeKeys: activeKeys,
    restore: restore,
    stub: stub
  };
});
