import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../services/login/login.service';

@Injectable()
export class LoggedInGuard implements CanActivate{

  constructor(private router: Router,
              private loginService: LoginService) { }

  canActivate(): boolean {
    if(this.loginService.loggedIn){
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
