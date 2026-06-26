import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { postReducer } from './store/post/post.reducer';
import { PostEffects } from './store/post/post.effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MainPageModule } from './main-page/main-page-module';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { jwtInterceptor } from './configs/auth/jwt.interceptor';
import { AuthEffects } from './store/auth/auth.effects';
import { authReducer } from './store/auth/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(MainPageModule),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideRouter(routes),
    provideStore({
      auth: authReducer,
      posts: postReducer,
    }),
    provideEffects([PostEffects, AuthEffects]),
    provideStoreDevtools({
      maxAge: 25, // keeps last 25 states
    }),
  ],
};
