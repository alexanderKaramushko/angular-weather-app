import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

export enum CustomSnackbarType {
  ERROR,
  SUCCESS,
}

export type CustomSnackbarData = {
  message: string;
  type: CustomSnackbarType;
}

@Component({
  selector: 'custom-snackbar',
  styleUrls: ['./custom-snackbar.component.css'],
  templateUrl: './custom-snackbar.component.html',
})
export class CustomSnackbarComponent {

  types = CustomSnackbarType;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: CustomSnackbarData, public snackBar: MatSnackBar) { }

}
