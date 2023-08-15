import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Forecast } from 'src/app/forecast/model/forecast.model';
import * as forecastActions from 'src/app/forecast/store/forecast.actions';
import * as forecastSelectors from 'src/app/forecast/store/forecast.selectors';
import * as forecastStore from 'src/app/forecast/store/forecast.store';

const ulLatitude = 54.32824;
const ulLongitude = 48.38657;

@Component({
  selector: 'forecast',
  styleUrls: ['./forecast.component.css'],
  templateUrl: './forecast.component.html',
})
export class ForecastComponent {

  forecast$: Observable<Forecast | null>;

  latitude = ulLatitude;

  longitude = ulLongitude;

  constructor(private store: Store<forecastStore.ForecastState>) {
    this.updateForecast(this.latitude, this.longitude);
  }

  updateForecast(latitude: number, longitude: number) {
    this.store.dispatch(forecastActions.requestLoadForecast({
      forecastQuery: {
        currentWeather: true,
        latitude,
        longitude,
      },
    }));

    this.forecast$ = this.store.select(forecastSelectors.forecast);
  }

  handleCoordsChange(coords: { latitude: number; longitude: number }) {
    this.latitude = coords.latitude;
    this.longitude = coords.longitude;

    this.updateForecast(this.latitude, this.longitude);
  }

}
