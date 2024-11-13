// grupo de pelotas
import { Ball } from "./Ball.js";
export class GrupoPelotas extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);

    this.createBalls(400,300);
  }

  createBalls(x,y) {
    let ball = new Ball(this.scene,x,y,10, 0xffffff, 1);
    this.add(ball);
  }


}