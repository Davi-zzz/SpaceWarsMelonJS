import {
  Sprite,
  loader,
  game,
  Math,
  input,
} from "melonjs/dist/melonjs.module.js";

class PlayerEntity extends Sprite {
  /**
   * constructor
   */
  constructor() {
    // call the parent constructor
    let image = loader.getImage("player");
    super(
      game.viewport.width / 2 - image.width / 2,
      game.viewport.height - image.height - 20,
      { image: image, width: 32, height: 32 }
    );
    this.velx = 520;
    this.maxX = game.viewport.width - this.width;
  }

  /**
   * update the entity
   */
  update(dt) {
    // change body force based on inputs
    //....
    // call the parent method
    super.update(dt);

    if (input.isKeyPressed("left")) {
      this.pos.x -= (this.velx * dt) / 1000;
    }
    if (input.isKeyPressed("right")) {
      this.pos.x += (this.velx * dt) / 1000;
    }
    this.pos.x = Math.clamp(this.pos.x, 32, this.maxX);

    return true;
  }

  /**
   * colision handler
   * (called when colliding with other objects)
   */
  onCollision(response, other) {
    // Make all other objects solid
    return true;
  }
}

export default PlayerEntity;
