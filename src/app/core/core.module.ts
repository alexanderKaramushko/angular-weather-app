import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

import { httpInterceptorProviders } from './interceptors/httpInterceptorProviders';
import { MainLayoutModule } from './layout/main/main-layout.module';
import { ENVIRONMENT } from './services/environment.service';
import { coreMetaReducers, coreReducers } from './store/core.store';
import { SettingsEffects } from './store/settings/settings.effects';

@NgModule({
  declarations: [],
  exports: [
    MainLayoutModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production, maxAge: 25 }),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(coreReducers, { metaReducers: coreMetaReducers }),
    EffectsModule.forRoot([SettingsEffects]),
    MainLayoutModule,
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
