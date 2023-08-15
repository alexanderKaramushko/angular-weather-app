import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const enum RoutePath {
  MAIN = '',
}

const appRoutes: Routes = [
  {
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
    path: RoutePath.MAIN,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule { }
