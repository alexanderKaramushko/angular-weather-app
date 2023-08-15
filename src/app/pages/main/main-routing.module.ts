import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    children: [
      {
        loadChildren: () => import('src/app/forecast/forecast.module').then((m) => m.ForecastModule),
        path: '',
      },
    ],
    component: MainComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule { }
