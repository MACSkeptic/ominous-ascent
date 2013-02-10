define(function (require) {
  var defaults = {
    velocity: 10,
    width: 4,
    height: 4,
    type: 'player',
    handleInput: handleInput,
    components: [ require('../component').movement() ]
  };

  function create(specs) {
    return _(specs).defaults(defaults);
  }

  function handleInput(state, input) {
    this.velocityX = 0;
    this.velocityY = 0;

    if (input.keyPressed('a')) {
      this.velocityX = -this.velocity;
    }
    if (input.keyPressed('d')) {
      this.velocityX = this.velocity;
    }
    if (input.keyPressed('w')) {
      this.velocityY = -this.velocity;
    }
    if (input.keyPressed('s')) {
      this.velocityY = this.velocity;
    }
  }

  return create;
});
