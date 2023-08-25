import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IfLoadedDirective } from 'src/app/utils/directives/if-loaded.directive';

import { IfLoadedViewComponent } from './if-loaded-view.component';

@NgModule({
  declarations: [IfLoadedDirective, IfLoadedViewComponent],
  exports: [IfLoadedViewComponent],
  imports: [
    CommonModule,
  ],
})
export class IfLoadedViewModule { }
