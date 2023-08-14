import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Forecast } from 'src/app/core/models/forecast.model';
import * as forecastActions from 'src/app/core/store/forecast.actions';
import * as forecastSelectors from 'src/app/core/store/forecast.selectors';
import * as forecastStore from 'src/app/core/store/forecast.store';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent {

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
