import {
  Stage,
  game,
  state,
  ColorLayer,
  input,
} from "melonjs/dist/melonjs.module.js";
import EnemyEntity from "../renderables/enemy";

import PlayerEntity from "../renderables/player";
class PlayScreen extends Stage {
  /**
   *  action to perform on state change
   */
  onResetEvent() {
    // add a gray background to the default Stage
    game.world.addChild(new ColorLayer("background", "#202020"));
    this.player = new PlayerEntity();
    this.enemy = new EnemyEntity(450, 450);
    game.world.addChild(this.enemy, 0);
    game.world.addChild(this.player, 1);

    input.bindKey(input.KEY.LEFT, "left");
    input.bindKey(input.KEY.RIGHT, "right");
    input.bindKey(input.KEY.A, "left");
    input.bindKey(input.KEY.D, "right");

    state.change(state.PLAY);
  }

  onDestroyEvent() {
    input.unbindKey(input.KEY.LEFT);
    input.unbindKey(input.KEY.RIGHT);
    input.unbindKey(input.KEY.A);
    input.unbindKey(input.KEY.D);
  }
}

export default PlayScreen;
