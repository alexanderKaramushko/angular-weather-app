import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { IfLoadedViewModule } from './components/if-loaded-view/if-loaded-view.module';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [MapComponent],
  exports: [
    TabsModule,
    AlertModule,
    IfLoadedViewModule,
    MapComponent,
    BsDropdownModule,
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
})
export class SharedModule { }
