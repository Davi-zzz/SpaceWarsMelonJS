import { Body, Rect, Sprite, Math } from "melonjs";

class EnemyEntity extends Sprite {
  constructor(x, y) {
    super(x, y, {
      image: "ships",
      frameheight: 32,
      framewidth: 32,
    });
    this.body = new Body(this);
    this.body.addShape(new Rect(10, 10, this.width, this.height));
    this.body.ignoreGravity = true;
    this.chooseShipImage();
  }
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
