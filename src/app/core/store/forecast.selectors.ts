import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as forecastStore from './forecast.store';

export const forecastSelector = createFeatureSelector<forecastStore.ForecastState>(forecastStore.forecastFeatureKey);

export const forecast = createSelector(forecastSelector, forecastStore.selectForecast);
