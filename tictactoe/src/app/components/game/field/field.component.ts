import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../models/Player';
import {GameService} from '../../../services/game/game.service';
import {Move} from '../../../models/Move';
import {faCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {

  @Input() fieldNumber: any;
  player: Player;
  gameSize: number;

  faCircle = faCircle;
  faTimes = faTimes;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.player = new Player();
    this.gameSize = this.gameService.gameSize;
  }

  changeTurn(): void {
    if (!this.checkField()) {
      this.player = this.gameService.changeturn();
      this.addMove();
      this.gameService.checkWinner();
    }
  }

  checkField(): boolean{
    return this.player.name != null;
  }

  addMove(): void{
    this.gameService.moves.push(new Move(this.fieldNumber % 3, Math.floor(this.fieldNumber / 3), this.player));
  }

}
