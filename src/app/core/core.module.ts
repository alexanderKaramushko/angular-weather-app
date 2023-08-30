import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from 'src/environments/environment';

import { httpInterceptorProviders } from './interceptors/httpInterceptorProviders';
import { MainLayoutModule } from './layout/main/main-layout.module';
import { ENVIRONMENT } from './services/environment.service';
import { coreMetaReducers, coreReducers } from './store/core.store';
import { SettingsEffects } from './store/settings/settings.effects';

function loadTranslationsFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json',
  );
}

@NgModule({
  declarations: [],
  exports: [
    MainLayoutModule,
    TranslateModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production, maxAge: 25 }),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(coreReducers, { metaReducers: coreMetaReducers }),
    EffectsModule.forRoot([SettingsEffects]),
    MainLayoutModule,
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: loadTranslationsFactory,
      },
    }),
  ],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
    httpInterceptorProviders,
  ],
})
export class CoreModule { }
