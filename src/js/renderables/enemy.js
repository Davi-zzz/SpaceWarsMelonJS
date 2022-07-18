import { Body, Rect, Sprite, Math, collision} from "melonjs";

class EnemyEntity extends Sprite {
  constructor(x, y) {
    super(x, y, {
      image: "ships",
      frameheight: 32,
      framewidth: 32,
    });
    this.chooseShipImage();
    this.body = new Body(this);
    this.body.collisionType = collision.types.ENEMY_OBJECT;
    this.body.addShape(new Rect(0, 0, this.width, this.height));
    this.body.ignoreGravity = true;
  }
  //function to define the frame used for each space ship
  chooseShipImage() {
    let frame = Math.random(0, 3);
    super.addAnimation("idle", [frame], 1);
    super.setCurrentAnimation("idle", () => {
    });
  }
  /**
   * update the entity
   */
  update(dt) {
    // change body force based on inputs
    //....
    // call the parent method
    return super.update(dt);
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
export default EnemyEntity;
