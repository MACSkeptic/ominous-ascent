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
    player = require('../entity').player({ x: 30, y: 15 });
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
      
      var click = input.clicked(scene);
      var fireball = require('../entity/shot/fireball');
      if (click) {
        scene.entities.push(fireball({x: click.x, y: click.y }));
      }
    }

    addTargets(scene.entities);
    addPlayer(scene.entities);

    return scene;
  }

  return create;
});
