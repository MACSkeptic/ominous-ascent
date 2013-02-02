define(function (require) {
  require('./engine/engine_test');
  require('./engine/game_loop_test');
  require('./engine/shared_state_test');

  require('./scene/splash_screen_test');
  require('./scene/first_screen_test');

  require('./renderer/canvas_test');

  require('./game/update_test');

  require('./asset/image_loader_test');
});
