import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game/game.service';
import {Player} from '../../models/Player';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})

export class GameComponent implements OnInit {
  playerOne: Player;
  playerTwo: Player;

  constructor(private gameService: GameService,
              private router: Router) { }

  ngOnInit(): void {
    this.playerOne = this.gameService.playerOne;
    this.playerTwo = this.gameService.playerTwo;
    this.gameService.resetGame();
  }

  getGameTurn(): boolean{
    return this.gameService.turn;
  }

  getWinnerName(): string{
    return this.gameService.winner.name;
  }

  getNumberOfGameMoves(): number{
    return this.gameService.moves.length;
  }

  showModal(): boolean{
    return this.getWinnerName() != null || this.getNumberOfGameMoves() === 9;
  }

  navigateToGame(): void {
    this.gameService.resetGame();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/game']));
  }
}
