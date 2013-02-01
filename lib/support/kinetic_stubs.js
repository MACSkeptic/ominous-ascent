define(function (require) {
  function restore() {
    Kinetic.Stage.restore();
  }

  function stage() {
    sinon.stub(Kinetic, 'Stage').returns({
      draw: sinon.spy(),
      add: sinon.spy(),
      removeChildren: sinon.spy()
    });
  }

  return {
    stage: stage,
    restore: restore
  };
});
