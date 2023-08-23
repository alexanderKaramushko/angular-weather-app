import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faCircleExclamation,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { IfLoadedViewModule } from './components/if-loaded-view/if-loaded-view.module';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [MapComponent, CustomSnackbarComponent],
  exports: [
    IfLoadedViewModule,
    MapComponent,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    CustomSnackbarComponent,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SharedModule {

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faCheck,
      faCircleExclamation,
      faClose,
    );
  }

}
