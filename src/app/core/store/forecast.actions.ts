import { createAction, props } from '@ngrx/store';

import { Forecast } from '../models/forecast.model';
import { ForecastQuery } from '../services/weather.service';

export const requestLoadForecast = createAction(
  '[Forecast/API] Request Load forecast',
  props<{ forecastQuery: ForecastQuery }>(),
);

export const loadForecast = createAction(
  '[Forecast/API] Load forecast',
  props<Forecast>(),
);
