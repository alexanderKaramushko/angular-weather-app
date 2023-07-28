import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../pages/main/main.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
})

export class AppModule { }
