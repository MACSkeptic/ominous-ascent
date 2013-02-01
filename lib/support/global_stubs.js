define(function (require) {
  var thingsToRestore = [];

  function restore(name) {
    if (name) { return window[name].restore(); }
    _(thingsToRestore).each(restore);
    thingsToRestore = [];
  }

  function stub(name) {
    sinon.stub(window, name);
    thingsToRestore.push(name);
  }

  function requestAnimationFrame() { stub('requestAnimationFrame'); }
  function $() { stub('$'); }

  return {
    requestAnimationFrame: requestAnimationFrame,
    '$': $,
    stub: stub,
    restore: restore
  };
});
