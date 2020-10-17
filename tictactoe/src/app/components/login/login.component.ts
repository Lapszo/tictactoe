import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {Player} from '../../models/Player';
import {Sign} from '../../models/Sign';
import {GameService} from '../../services/game/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  playerOne: Player;
  playerTwo: Player;
  playersForm: FormGroup;

  constructor(private router: Router,
              private loginService: LoginService,
              private gameService: GameService) {
  }

  ngOnInit(): void {
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.playerOne.name = '';
    this.playerTwo.name = '';
    this.playerOne.sign = Math.floor(Math.random() * 2) === 0 ? Sign.CROSS : Sign.CIRCLE;
    this.playerTwo.sign = this.playerOne.sign === Sign.CIRCLE ? Sign.CROSS : Sign.CIRCLE;
    this.playersForm = new FormGroup({
      firstPlayer: new FormControl(this.playerOne.name, [
        Validators.required
      ]),
      secondPlayer: new FormControl(this.playerTwo.name, [
        Validators.required
      ])
    });
  }

  navigateToGame(): void {
    if (this.playersForm.valid && this.getPlayerName(this.playerOne) !== this.getPlayerName(this.playerTwo )) {
      this.loginService.loggedIn = true;
      this.router.navigate(['/game']);
      this.gameService.playerOne = this.playerOne;
      this.gameService.playerTwo = this.playerTwo;
    }
    this.checkPlayersNames();
  }

  checkPlayersNames(): void {
    this.playersForm.get('firstPlayer').markAsDirty();
    this.playersForm.get('secondPlayer').markAsDirty();

  }

  getPlayerName(player: Player): string{
    return player.name;
  }


}
