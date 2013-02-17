define(function (require) {
  var defaultShot = require('./shot/fireball');
  var defaultGun = require('../component/gun/pistol');
  var click;
  var defaults = {
    velocity: 10,
    width: 4,
    height: 4,
    type: 'player',
    handleInput: handleInput,
    components: [
      require('../component').movement(),
      defaultGun({ shot: defaultShot, timeRequiredBetweenShots: 300 })
    ]
  };

  function create(specs) {
    var player = _(specs).defaults(defaults);
    player.components[1].owner = player;
    return player;
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

    (click = input.clicked(state.currentScene)) &&
      this.components[1].shoot(state, click);
  }

  return create;
});
