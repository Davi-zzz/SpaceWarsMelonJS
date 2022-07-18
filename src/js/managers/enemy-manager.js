import { Container, game } from "melonjs";
import EnemyEntity from "../renderables/enemy";
import { timer } from "melonjs";
class EnemyManager extends Container {
  static COLS = 9;
  static ROWS = 4;

  constructor() {
    super(
      game.viewport.width / 4,
      9,
      EnemyManager.COLS * 64 - 32,
      EnemyManager.ROWS * 64 - 32
    );
    this.enableChildBoundsUpdate = true;
    this.vel = 0.8;
  }

  createEnemies() {
    for (let i = 0; i < EnemyManager.COLS; i++) {
      for (let j = 0; j < EnemyManager.ROWS; j++) {
        var enemy = new EnemyEntity(i * 64, j * 64);
        this.addChild(enemy);
      }
    }
  }

  onActivateEvent() {
    this.timer = timer.setInterval(() => {
      //using this we can retrieve left and right world coordenates
      let bounds = this.getBounds();
      const downlevel = (game.viewport.height * 2) / 100;
      if (
        //checks if the container is moving to right and if it is inside game screen
        (this.vel > 0 && bounds.right + this.vel >= game.viewport.width) ||
        //checks if the container is moving left, and its left bounds is less than zero
        (this.vel < 0 && bounds.left + this.vel <= 0)
      ) {
        //reverse the speed to create left/right movimentation and move down the entire container by 16px
        this.vel *= -1;
        this.pos.y += downlevel;

        //when right move (end of cycle), increments the speed of container
        if (this.vel > 0) {
          this.vel += (this.vel * 2) / 100;
        } else {
          this.vel += (this.vel * 2) / 100;
        }
      } else {
        //here we increment the speed of container if he has no moved yet
        this.pos.x += this.vel;
      }
    }, 10);
  }

  onDeactivateEvent() {
    timer.clearInterval(this.timer);
  }
}
export default EnemyManager;
