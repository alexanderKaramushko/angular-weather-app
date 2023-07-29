import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule { }
