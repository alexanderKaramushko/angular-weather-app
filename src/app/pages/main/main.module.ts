import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeatherService } from 'src/app/core/services/weather.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  bootstrap: [MainComponent],
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  providers: [
    WeatherService,
  ],
})
export class MainModule { }
