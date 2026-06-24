import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AuthActions} from './auth.actions';
import {catchError, map, mergeMap, of, tap} from 'rxjs';

@Injectable()
export class AuthEffects {

  private readonly action$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public login$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.login),
    mergeMap(({username, password}) =>
      this.authService.login({username, password}).pipe(
        map(response => AuthActions.loginSuccess({ token: response.token })),
        catchError(error =>
          of(AuthActions.loginFailure({ error: error.message }))
        )
      )
    )
  ));

  public loginSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(action => {
        this.authService.saveToken(action.token);
        this.router.navigate(['/main']);
      })
    ),
    { dispatch: false }
  );

  public logout$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.logout),
      tap(action => {
        this.authService.logout();
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

}
