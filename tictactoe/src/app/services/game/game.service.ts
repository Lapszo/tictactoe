import {Injectable} from '@angular/core';
import {Player} from '../../models/Player';
import {Move} from '../../models/Move';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  playerOne: Player;
  playerTwo: Player;
  moves: Array<Move> = [];
  turn = true;
  gameSize = 3;
  winner: Player = new Player();

  constructor() {}

  changeturn(): Player {
    const player = this.turn ? this.playerOne : this.playerTwo;
    this.turn = !this.turn;
    return player;
  }

  checkWinner(): void {
    const playerOneMoves = this.moves.filter((move) => move.player.name === this.playerOne.name);
    const playerTwoMoves = this.moves.filter((move) => move.player.name === this.playerTwo.name);

    for (let i = 0; i < playerOneMoves.length; i++) {
      let actualMove = playerOneMoves[i];
      let maxPoints = 1;
      let points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerOneMoves.find(value => (value.x === actualMove.x + j) && (value.y === actualMove.y))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }
      points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerOneMoves.find(value => (value.y === actualMove.y + j) && (value.x === actualMove.x))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }
      points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerOneMoves.find(value => (value.y === actualMove.y + j) && (value.x === actualMove.x + j))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }
      points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerOneMoves.find(value => (value.y === actualMove.y + j) && (value.x === actualMove.x - j))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }

      this.determinateWinner(actualMove, maxPoints);
    }

    for (let i = 0; i < playerTwoMoves.length; i++) {
      let actualMove = playerTwoMoves[i];
      let maxPoints = 1;
      let points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerTwoMoves.find(value => (value.x === actualMove.x + j) && (value.y === actualMove.y))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }
      points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerTwoMoves.find(value => (value.y === actualMove.y + j) && (value.x === actualMove.x))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }
      points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerTwoMoves.find(value => (value.y === actualMove.y + j) && (value.x === actualMove.x + j))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }
      points = 1;
      for (let j = 1; j < this.gameSize; j++) {
        if (playerTwoMoves.find(value => (value.y === actualMove.y + j) && (value.x === actualMove.x - j))) {
          points++;
        }
        maxPoints = Math.max(maxPoints, points);
      }
      this.determinateWinner(actualMove, maxPoints);
    }
  }

  resetGame(): void {
    this.moves = [];
    this.turn = true;
    this.gameSize = 3;
    this.winner = new Player();
  }

  determinateWinner(actualMove: Move, points: number): void{
   if (points === this.gameSize) {
     this.winner = actualMove.player;
   }
  }

}

