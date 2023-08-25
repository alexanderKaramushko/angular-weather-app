import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { WeatherService } from 'src/app/forecast/services/weather.service';

import { loadForecast, requestLoadForecast } from './forecast.actions';

@Injectable()
export class ForecastEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService) { }

  loadForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadForecast),
      switchMap((action) => (
        this.weatherService.getForecast(action.forecastQuery).pipe(
          map((data) => loadForecast(data)),
        )
      )),
    ))

}
