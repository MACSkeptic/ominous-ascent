define(function (require) {
  var MAX_TIME_SINCE_LAST_SHOT = 999999;
  var defaults = {
    timeSinceLastShot: 0,
    update: update,
    shoot: shoot
  };

  function timeSinceLastShotIsMaxed() {
    return this.timeSinceLastShot >= MAX_TIME_SINCE_LAST_SHOT;
  }

  function recalculateTimeSinceLastShot(state) {
    this.timeSinceLastShot = this.timeSinceLastShot + state.elapsed;

    if (timeSinceLastShotIsMaxed.call(this)) {
      this.timeSinceLastShot = MAX_TIME_SINCE_LAST_SHOT;
    }
  }

  function update(state) {
    recalculateTimeSinceLastShot.call(this, state);
  }

  function shoot(state) {
    this.timeSinceLastShot = 0;
    state.currentScene.entities.push(this.shot(state));
  }

  function create(specs, shot) {
    return _({
      shot: shot
    }).defaults(defaults);
  }

  return create;
});
