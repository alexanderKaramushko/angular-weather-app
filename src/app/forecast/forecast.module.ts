import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from 'src/app/shared/shared.module';

import { FiltersComponent } from './components/filters/filters.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastEffects } from './store/forecast.effects';
import { forecastFeatureKey, forecastReducer } from './store/forecast.store';

@NgModule({
  declarations: [ForecastComponent, FiltersComponent],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(forecastFeatureKey, forecastReducer),
    EffectsModule.forFeature([ForecastEffects]),
  ],
})
export class ForecastModule { }
