import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppState } from './shared/store/Global/App.state';
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './shared/store/Blog/blog.effects';
import { AppEffects } from './shared/store/Global/app.effect';
import { provideRouterStore } from '@ngrx/router-store';
import { Customserializer } from './shared/store/Router/customSerializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(StoreModule.forRoot(AppState), EffectsModule.forRoot([BlogEffects, AppEffects])),
    provideAnimations(),
    provideStoreDevtools({ maxAge: 41, logOnly: !isDevMode() }),
    provideHttpClient(), 
    provideRouterStore({serializer:Customserializer})
  ]
};
