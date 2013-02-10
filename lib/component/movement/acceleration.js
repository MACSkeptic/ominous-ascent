define(function (require) {
  var defaults = {
    actOn: actOn
  };

  function notApplicableTo(entity) {
    entity.velocityX = entity.velocityX || 0;
    entity.velocityY = entity.velocityY || 0;
    entity.accelerationX = entity.accelerationX || 0;
    entity.accelerationY = entity.accelerationY || 0;

    return !entity.accelerationX && !entity.accelerationY;
  }

  function delta(acceleration, elapsed) {
    // acceleration is meters/second/second
    // elapsed is milliseconds
    return acceleration * elapsed / 1000;
  }

  function actOn(entity, state) {
    if (notApplicableTo(entity)) { return; }

    entity.velocityX = entity.velocityX + delta(entity.accelerationX, state.elapsed);
    entity.velocityY = entity.velocityY + delta(entity.accelerationY, state.elapsed);
  }

  function create() {
    return defaults;
  }

  return create;
});
