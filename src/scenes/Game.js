import { Scene } from "phaser";

// import class entitities
import { Paddle } from "../entities/Paddle";
import { Ball } from "../entities/Ball";
import { Brick } from "../entities/Brick";
import { WallBrick } from "../entities/WallBrick";
import { GrupoPelotas } from "../entities/GrupoPelotas";
import { GrupoBombas } from "../entities/GrupoBombas";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    // instanciar una nueva paleta.
    // crea un nuevo objeto
    // el this, aca, hace referencia a la escena
    this.ball = new GrupoPelotas(this);
    this.paddle = new Paddle(this, 400, 550, 300, 20, 0xffffff, 1);
    this.wall = new WallBrick(this);
    this.bomba = new GrupoBombas(this);

    // colisiones
    this.physics.add.collider(this.ball,this.paddle );

    this.physics.add.collider(
      this.ball,
      this.wall,
      (ball, brick) => {
        brick.hit();
      },
      null,
      this
    );

    this.physics.add.collider(
      this.bomba,
      this.paddle,
      (bomba,paddle) => {
        this.scene.start("GameOver");
      },
      null,
      this
    );

    //colision de la pelota con el limite inferior
    this.physics.world.on("worldbounds", (body, up, down, left, right) => {
      console.log("worldbounds");
      if (down) {
        console.log("hit bottom");
        
      body.gameObject.destroy();
        if (this.ball.getChildren().length === 0) {
        this.scene.start("GameOver");
    }
      }
    });
  }

  update() {
    this.paddle.update();
    

  }
}
