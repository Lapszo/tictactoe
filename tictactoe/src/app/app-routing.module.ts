import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {GameComponent} from './components/game/game.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoggedInGuard} from './guards/logged-in-guard';

const routes: Routes = [
  {path: 'game', component: GameComponent, canActivate: [LoggedInGuard]},
  {path: '', component: LoginComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
