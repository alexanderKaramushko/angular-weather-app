import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Forecast } from 'src/app/forecast/model/forecast.model';
import * as forecastActions from 'src/app/forecast/store/forecast.actions';
import * as forecastSelectors from 'src/app/forecast/store/forecast.selectors';
import * as forecastStore from 'src/app/forecast/store/forecast.store';

@Component({
  selector: 'forecast',
  styleUrls: ['./forecast.component.css'],
  templateUrl: './forecast.component.html',
})
export class ForecastComponent {

  forecast$: Observable<Forecast | null>;

  constructor(private store: Store<forecastStore.ForecastState>) {
    this.store.dispatch(forecastActions.requestLoadForecast({
      forecastQuery: {
        currentWeather: true,
        latitude: 37.625,
        longitude: 55.75,
      },
    }));

    this.forecast$ = this.store.select(forecastSelectors.forecast);
  }

}
