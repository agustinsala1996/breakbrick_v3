// grupo de bombas
import { Bomba } from "./Bomba.js";
export class GrupoBombas extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);

    
  }

  createBombas(x,y) {
    let bomba = new Bomba(this.scene,x,y,20, 0x000000, 1);
    this.add(bomba);
  }

}