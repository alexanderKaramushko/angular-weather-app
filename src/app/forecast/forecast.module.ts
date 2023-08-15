import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastEffects } from './store/forecast.effects';
import { forecastFeatureKey, forecastReducer } from './store/forecast.store';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    StoreModule.forFeature(forecastFeatureKey, forecastReducer),
    EffectsModule.forFeature([ForecastEffects]),
  ],
})
export class ForecastModule { }
