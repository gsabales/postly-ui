import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { AuthActions } from './auth.actions';

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    loading: false,
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    token: null,
  })),
);
