/* eslint-disable camelcase */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CloudCover, Forecast, Windspeed } from 'src/app/forecast/model/forecast.model';

/**
 * @see {@link https://open-meteo.com/en/docs} API docs
 */
export type ForecastQuery = {
  longitude: Longitude;
  latitude: Latitude;
  currentWeather?: boolean;
  hourly?: Array<
    | 'temperature_2m'
    | 'pressure_msl'
    | 'precipitation'
    | Windspeed
    | CloudCover
  >
};

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForecast(query: ForecastQuery) {
    return this.http.get<Forecast>(
      '/forecast',
      {
        params: new HttpParams()
          .set('latitude', query.latitude)
          .set('longitude', query.longitude)
          .set('current_weather', query.currentWeather)
          .set('hourly', query.hourly ? query.hourly?.join(',') : ''),
      },
    );
  }

}
