import {
  audio,
  loader,
  state,
  device,
  video,
  utils,
  plugin,
  pool,
} from "melonjs/dist/melonjs.module.js";

import "index.css";

import PlayScreen from "js/stage/play.js";
import PlayerEntity from "js/renderables/player.js";
import EnemyEntity from "./js/renderables/enemy";
import Laser from "./js/renderables/laser";

device.onReady(() => {
  // initialize the display canvas once the device/browser is ready
  if (!video.init(1200, 1000, { parent: "screen", scale: "flex-width" })) {
    alert("Your browser does not support HTML5 canvas.");
    return;
  }

  // initialize the debug plugin in development mode.
  if (process.env.NODE_ENV === "development") {
    import("js/plugin/debug/debugPanel.js").then((debugPlugin) => {
      // automatically register the debug panel
      utils.function.defer(
        plugin.register,
        this,
        debugPlugin.DebugPanelPlugin,
        "debugPanel"
      );
    });
  }

  // Initialize the audio.
  audio.init("mp3,ogg");

  // allow cross-origin for image/texture loading
  loader.crossOrigin = "anonymous";

  // set and load all resources.
  loader.preload(
    [
      { name: "player", type: "image", src: "data/img/player.png" },
      { name: "ships", type: "image", src: "data/img/ships.png" },
    ],
    () => {
      // set the user defined game stages
      state.set(state.PLAY, new PlayScreen());

      // add our player entity in the entity pool
      pool.register("mainPlayer", PlayerEntity);

      // add our player entity in the entity pool
      pool.register("enemyEntity", EnemyEntity);

      // add our laser in the entity pool
      pool.register("laser", Laser);

      // Start the game.
      state.change(state.PLAY);
    }
  );
});
