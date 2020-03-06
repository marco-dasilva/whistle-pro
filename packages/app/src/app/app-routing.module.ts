import { RegistrationComponent } from './component/registration/registration.component';
import { PlayerComponent } from './component/player/player.component';
import { IndexComponent } from './component/index/index.component';
import { LoginComponent } from './component/login/login.component';
import { TeamComponent } from './component/team/team.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: IndexComponent
  },
  {
    path: 'teams',
    canActivate: [AuthGuard],
    component: TeamComponent
  },
  {
    path: 'player',
    canActivate: [AuthGuard],
    component: PlayerComponent
  },
  {
    path: 'register',
    canActivate: [AuthGuard],
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
