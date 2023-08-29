import { createAction, props } from '@ngrx/store';

import { Forecast } from 'src/app/forecast/model/forecast.model';
import { ForecastQuery } from 'src/app/forecast/services/weather.service';

export const requestLoadForecast = createAction(
  '[Forecast/API] Request Load forecast',
  props<{ forecastQuery: ForecastQuery }>(),
);

export const loadForecast = createAction(
  '[Forecast/API] Load forecast',
  props<{ forecast: Forecast }>(),
);
