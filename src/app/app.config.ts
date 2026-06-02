import {ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { postReducer } from './store/post.reducer';
import { PostEffects } from './store/post.effects';
import { provideHttpClient } from '@angular/common/http';
import {MainPageModule} from './main-page/main-page-module';
import {provideStoreDevtools} from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(MainPageModule),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({
      posts: postReducer
    }),
    provideEffects([
      PostEffects
    ]),
    provideStoreDevtools({
      maxAge: 25 // keeps last 25 states
    })
  ],
};
