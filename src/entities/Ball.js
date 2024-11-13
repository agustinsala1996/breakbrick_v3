export class Ball extends Phaser.GameObjects.Arc {
  constructor(scene, x, y, radius, color, alpha) {
    super(scene, x, y, radius, 0, 360, false, color, alpha);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1, 1);    
    this.velocidadinicial= 200;
    this.body.setVelocity(this.velocidadinicial, this.velocidadinicial);
    this.body.onWorldBounds = true;
  }
  aumentovel () {
    this.velocidadinicial= this.velocidadinicial+ this.velocidadinicial*0.1;
    this.body.setVelocity(this.velocidadinicial,this.velocidadinicial)
  }

}
