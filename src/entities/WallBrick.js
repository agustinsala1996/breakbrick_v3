// grpup of brick
import { Brick } from "./Brick";
export class WallBrick extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);

    this.createWall();
  }

  createWall() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 6; j++) {
        let brick = new Brick(
          this.scene,
          60 + i * 100,
          50 + j * 30,
          90,
          20,
          0xffffff,
          1
        );
        this.add(brick);
      }
    }
  }

  
}

