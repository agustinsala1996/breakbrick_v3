export class Bomba extends Phaser.GameObjects.Arc {
    constructor(scene, x, y, radius, color, alpha) {
      super(scene, x, y, radius, 0, 360, false, color, alpha);
  
      scene.add.existing(this);
      scene.physics.add.existing(this);
      this.body.setCollideWorldBounds(true);
      ///this.body.setBounce(1, 1);    
      this.velocidadinicial= 200;
      this.body.setVelocity(0, this.velocidadinicial);
      this.body.onWorldBounds = true;
    }

    

}