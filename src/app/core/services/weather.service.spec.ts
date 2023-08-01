/* eslint-disable max-classes-per-file */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Forecast } from '../models/forecast.model';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  afterEach(() => {
    httpTestingController.verify();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const forecast = new Forecast(55, 55, {
      temperature_2m: [10, 20, 30] as any[],
    });

    service
      .getForecast({
        hourly: ['temperature_2m', 'windspeed_10'],
        latitude: 55,
        longitude: 55,
      })
      .subscribe((response) => {
        expect(response).toEqual(forecast);
      });

    const req = httpTestingController.expectOne('/forecast?latitude=55&longitude=55&hourly=temperature_2m,windspeed_10');

    expect(req.request.method).toBe('GET');

    req.flush(forecast);
  });
});
