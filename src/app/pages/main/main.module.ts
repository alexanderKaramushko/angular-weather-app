import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  bootstrap: [MainComponent],
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    SharedModule,
  ],
})
export class MainModule { }
