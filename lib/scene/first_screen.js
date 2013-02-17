define(function (require) {
  var target = require('./first_screen/target');
  var player;

  function addTargets(layer) {
    layer.push(target({ x: 10, y: 6 }));
    layer.push(target({ x: 30, y: 6 }));
    layer.push(target({ x: 50, y: 6 }));
    layer.push(target({ x: 10, y: 24 }));
    layer.push(target({ x: 30, y: 24 }));
    layer.push(target({ x: 50, y: 24 }));
  }

  function addPlayer(layer) {
    // DELETE THIS
    var fireball = require('../entity/shot/fireball');
    var pistol = require('../component/gun/pistol');
    // DELETE THIS

    player = require('../entity').player({ x: 30, y: 15 });

    // DELETE THIS
    player.components.push(pistol({
      owner: player,
      shot: fireball,
      timeRequiredBetweenShots: 300
    }));
    // DELETE THIS

    layer.push(player);
  }

  function create(state) {
    var scene = {
      width: 60,
      height: 30,
      handleInput: handleInput,
      entities: []
    };

    function handleInput(state, input) {
      player.handleInput(state, input);
      
      // DELETE THIS
      var click = input.clicked(scene);
      if (click) {
        player.components[1].shoot(state, click);
      }
      // DELETE THIS
    }

    addTargets(scene.entities);
    addPlayer(scene.entities);

    return scene;
  }

  return create;
});
