import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { IfLoadedViewModule } from './components/if-loaded-view/if-loaded-view.module';

@NgModule({
  declarations: [],
  exports: [TabsModule, IfLoadedViewModule],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
  ],
})
export class SharedModule { }
