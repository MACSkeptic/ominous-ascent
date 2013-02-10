define(function (require) {
  var defaults = {
    timeSinceLastShot: 0,
    update: update,
    shoot: shoot
  };

  function update(state) {
    this.timeSinceLastShot = this.timeSinceLastShot + state.elapsed;
  }

  function shoot(state) {
    state.currentScene.entities.push(this.shot());
  }

  function create(specs, shot) {
    return _({
      shot: shot
    }).defaults(defaults);
  }

  return create;
});
