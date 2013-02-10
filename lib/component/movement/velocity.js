define(function (require) {
  var defaults = {
    actOn: actOn
  };

  function notApplicableTo(entity) {
    entity.velocityX = entity.velocityX || 0;
    entity.velocityY = entity.velocityY || 0;

    return !entity.velocityX && !entity.velocityY;
  }

  function delta(velocity, elapsed) {
    // velocity is meters/second
    // elapsed is milliseconds
    return velocity * elapsed / 1000;
  }

  function actOn(entity, state) {
    if (notApplicableTo(entity)) { return; }

    entity.x = entity.x + delta(entity.velocityX, state.elapsed);
    entity.y = entity.y + delta(entity.velocityY, state.elapsed);
  }

  function create() {
    return defaults;
  }

  return create;
});
