import { createReducer, on } from '@ngrx/store';

import { Forecast } from 'src/app/forecast/model/forecast.model';

import { loadForecast } from './forecast.actions';

export const forecastFeatureKey = 'forecast';

export type ForecastState = {
  forecast: Forecast | null;
}

export const initialState: ForecastState = {
  forecast: null,
};

export const forecastReducer = createReducer(
  initialState,
  on(loadForecast, (state, action) => ({ ...state, forecast: action.forecast })),
);

export const selectForecast = (state: ForecastState) => state.forecast;
