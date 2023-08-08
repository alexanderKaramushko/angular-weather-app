import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Forecast } from 'src/app/core/models/forecast.model';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {

  forecast$: Observable<Forecast> | undefined;
  forecastSubscription: Subscription | undefined;
  isLoading = false;

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.forecast$ = this.weather
      .getForecast({
        currentWeather: true,
        latitude: 37.625,
        longitude: 55.75,
      });

    this.forecastSubscription = this.forecast$
      .subscribe({
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  ngOnDestroy(): void {
    if (this.forecastSubscription) {
      this.forecastSubscription.unsubscribe();
    }
  }

}
