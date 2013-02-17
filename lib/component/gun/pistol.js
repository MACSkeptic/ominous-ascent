define(function (require) {
  var MAX_TIME_SINCE_LAST_SHOT = 999999;
  var geometry = require('../../util/geometry')();
  var pointAtParams = {
    origin: undefined,
    target: undefined,
    intensity: 10
  };
  var defaults = {
    owner: undefined,
    shotVelocity: 10,
    timeSinceLastShot: MAX_TIME_SINCE_LAST_SHOT,
    timeRequiredBetweenShots: 100,
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

  function createShotGoingTowards(target) {
    pointAtParams.origin = this.owner;
    pointAtParams.target = target;
    pointAtParams.intensity = this.shotVelocity;
    var velocity = geometry.pointAt(pointAtParams);

    return this.shot({
      x: this.owner.x,
      y: this.owner.y,
      velocityX: velocity.x,
      velocityY: velocity.y
    });
  }

  function shoot(state, target) {
    if (this.timeRequiredBetweenShots > this.timeSinceLastShot) { return; }
    this.timeSinceLastShot = 0;
    state.currentScene.entities.push(createShotGoingTowards.call(this, target));
  }

  function create(specs) {
    return _(specs).defaults(defaults);
  }

  return create;
});
