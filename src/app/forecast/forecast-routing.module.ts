import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForecastComponent } from './components/forecast/forecast.component';

const routes: Routes = [
  {
    component: ForecastComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ForecastRoutingModule { }
