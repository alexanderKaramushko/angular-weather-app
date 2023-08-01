import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Forecast } from 'src/app/core/models/forecast.model';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  forecast: Observable<Forecast> | undefined;

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    this.forecast = this.weather.getForecast({
      latitude: 37.625,
      longitude: 55.75,
    });
  }

}
