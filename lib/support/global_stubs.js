define(function (require) {
  var thingsToRestore = [];

  function restore() {
    _.each(thingsToRestore, function (name) { window[name].restore(); });
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
