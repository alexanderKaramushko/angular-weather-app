import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [],
  exports: [TabsModule],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
  ],
})
export class SharedModule { }
