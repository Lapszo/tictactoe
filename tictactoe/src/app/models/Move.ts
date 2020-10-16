import {Player} from "./Player";

export class Move{
  x: number;
  y: number;
  player: Player;
  constructor(x: number, y: number, player: Player){
    this.x = x;
    this.y = y;
    this.player = player;
  }
}
