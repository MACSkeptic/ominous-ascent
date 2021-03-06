define(function (require) {
  require('./engine/engine_test');
  require('./engine/game_loop_test');
  require('./engine/shared_state_test');

  require('./scene/splash_screen_test');
  require('./scene/first_screen_test');

  require('./renderer/canvas_test');

  require('./game/update_test');
  require('./game/input_test');

  require('./asset/image_loader_test');

  require('./entity/player_test');

  require('./util/image_finder_test');
  require('./util/geometry_test');

  require('./component/gun/pistol_test');
  require('./component/movement_test');
});
