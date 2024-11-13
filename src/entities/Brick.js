export class Brick extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, color, alpha) {
    super(scene, x, y, width, height, color, alpha);
    this.scene=scene
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(true);

    this.toches = 0;
    this.maxToches = Phaser.Math.Between(1,4);
    this.marcaPelota
    this.marcaBomba
    ///ladrillos creadores de pelotas
    this.ladrilloconmarca= Phaser.Math.Between(0,5);
    if (this.ladrilloconmarca==2){
      this.marcaPelota=this.scene.add.arc(x,y,8,0,360,false,0xFFFF00,1)
    }
    else if (this.ladrilloconmarca==5){ ////ladrillos creadores de bombas
    this.marcaBomba=this.scene.add.arc(x,y,8,0,360,false,0x000000,1)
   }
    
  
  
  }

  hit() {
    this.toches++;
    if (this.toches === 1) {
      this.setFillStyle(0xff0000);
    }
    if (this.toches === 2) {
      this.setFillStyle(0x00ff00);
    }
    if (this.toches === 3) {
      this.setFillStyle(0x0000ff);
    }

    if (this.toches === this.maxToches) {
      if (this.scene.wall.countActive()== 1) { ///si el contador es igual a 1 
        this.scene.wall.createWall(); /// creo denuevo una pared de ladrillos
        this.scene.ball.children.iterate((hijo)=> {
          hijo.aumentovel()
          console.log(hijo.velocidadinicial)
        }) ///aumento la velocidad a todos los hijos de grupopelota
        
      }
        if (this.marcaPelota) {
          console.log(this.scene)
          this.scene.ball.createBalls(this.x,this.y);
          this.marcaPelota.destroy();
        }

        if (this.marcaBomba) {
          this.scene.bomba.createBombas(this.x,this.y);
          this.marcaBomba.destroy();
        }
        this.destroy();
      
    
    }
  }
}
