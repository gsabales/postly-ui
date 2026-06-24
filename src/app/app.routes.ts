import {Routes} from '@angular/router';
import {LoginPage} from './login-page/login-page';
import {MainPage} from './main-page/main-page';
import {authGuard} from './configs/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'main',
    component: MainPage,
    canActivate: [authGuard]
  }
];
