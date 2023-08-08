import { AfterViewInit, Component } from '@angular/core';
import { debounceTime, Subject, switchMap } from 'rxjs';

import { ForecastQuery, WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent implements AfterViewInit {

  forecast$ = new Subject();

  getForecast$ = this.forecast$.pipe(
    debounceTime(250),
    switchMap((query: ForecastQuery) => this.weather.getForecast(query)),
  )

  constructor(private weather: WeatherService) { }

  ngAfterViewInit(): void {
    this.forecast$.next({
      currentWeather: true,
      latitude: 37.625,
      longitude: 55.75,
    });
  }

}
