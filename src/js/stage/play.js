import {
  Stage,
  game,
  state,
  ColorLayer,
  input,
  pool,
} from "melonjs/dist/melonjs.module.js";
import EnemyManager from "../managers/enemy-manager";

import PlayerEntity from "../renderables/player";
class PlayScreen extends Stage {
  /**
   *  action to perform on state change
   */
  onResetEvent() {
    // add a gray background to the default Stage
    game.world.addChild(new ColorLayer("background", "#202020"));
    this.player = new PlayerEntity();
    this.EnemyManager = new EnemyManager();
    this.EnemyManager.createEnemies();

    game.world.addChild(this.player, 1);
    game.world.addChild(this.EnemyManager, 2);

    //bind keys section
    input.bindKey(input.KEY.LEFT, "left");
    input.bindKey(input.KEY.RIGHT, "right");
    input.bindKey(input.KEY.A, "left");
    input.bindKey(input.KEY.D, "right");
    input.bindKey(input.KEY.SPACE, "shoot", true);

    state.change(state.PLAY);
  }

  checkIfLoss = (y) => {
    if (y >= this.player.pos.y) {
      console.log("end game");
      state.stop();
      // this.reset(this);
    }
  };

  onDestroyEvent() {
    input.unbindKey(input.KEY.LEFT);
    input.unbindKey(input.KEY.RIGHT);
    input.unbindKey(input.KEY.A);
    input.unbindKey(input.KEY.D);
    input.unbindKey(input.KEY.SPACE);
  }
}

export default PlayScreen;
