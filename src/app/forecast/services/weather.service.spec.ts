/* eslint-disable max-classes-per-file */
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Forecast } from '../model/forecast.model';
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
      // todo fix any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      temperature_2m: [10, 20, 30] as any,
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

  it('should throw error if request error', () => {
    const message = 'Not found';

    service
      .getForecast({
        latitude: 55,
        longitude: 55,
      })
      .subscribe({
        error: (error: HttpErrorResponse) => {
          expect(error.status).withContext('status').toEqual(404);
          expect(error.error).withContext('message').toEqual(message);
        },
        next: () => fail('should have failed with the 404 error'),
      });

    const req = httpTestingController.expectOne('/forecast?latitude=55&longitude=55');

    expect(req.request.method).toBe('GET');

    req.flush(message, {
      status: 404,
      statusText: 'Not found',
    });
  });
});
