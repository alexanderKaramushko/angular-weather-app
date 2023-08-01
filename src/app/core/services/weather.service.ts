/* eslint-disable camelcase */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CloudCover, Forecast, Windspeed } from 'src/app/core/models/forecast.model';

/**
 * @see {@link https://open-meteo.com/en/docs} API docs
 */
export type ForecastQuery = {
  longitude: Longitude;
  latitude: Latitude;
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
    const { hourly, ...rest } = query;

    return this.http.get<Forecast>(
      '/forecast',
      {
        params: {
          ...rest,
          ...(Array.isArray(hourly)
            ? { hourly: hourly?.join(',') }
            : {}
          ),
        },
      },
    );
  }

}
