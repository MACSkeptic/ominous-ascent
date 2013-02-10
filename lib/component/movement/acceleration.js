define(function (require) {
  var MAX_VELOCITY = 999999;
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

  function adjust(velocity, maxVelocity) {
    return ((velocity > maxVelocity) && maxVelocity) ||
      ((-velocity > maxVelocity) && -maxVelocity) ||
      velocity;
  }

  function ajustOverLimit(entity) {
    entity.maxVelocityX = entity.maxVelocityX || MAX_VELOCITY;
    entity.maxVelocityY = entity.maxVelocityY || MAX_VELOCITY;

    entity.velocityX = adjust(entity.velocityX, entity.maxVelocityX);
    entity.velocityY = adjust(entity.velocityY, entity.maxVelocityY);
  }

  function actOn(entity, state) {
    if (notApplicableTo(entity)) { return; }

    entity.velocityX = entity.velocityX + delta(entity.accelerationX, state.elapsed);
    entity.velocityY = entity.velocityY + delta(entity.accelerationY, state.elapsed);

    ajustOverLimit(entity);
  }

  function create() {
    return defaults;
  }

  return create;
});
