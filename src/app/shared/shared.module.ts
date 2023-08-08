import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { IfLoadedViewModule } from './components/if-loaded-view/if-loaded-view.module';

@NgModule({
  declarations: [],
  exports: [TabsModule, AlertModule, IfLoadedViewModule],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    AlertModule.forRoot(),
  ],
})
export class SharedModule { }
