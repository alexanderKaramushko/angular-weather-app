import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  CustomSnackbarComponent,
  CustomSnackbarData,
  CustomSnackbarType,
} from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';

import { NotificationsService, NotificationType } from './notifications.service';

@Injectable({
  providedIn: 'root',
})
export class SnacksService {

  constructor(
    private snackBar: MatSnackBar,
    private notificationsService: NotificationsService,
  ) { }

  private snackbarTypes: Record<number, CustomSnackbarType> = {
    [NotificationType.ERROR]: CustomSnackbarType.ERROR,
    [NotificationType.SUCCESS]: CustomSnackbarType.SUCCESS,
  };

  watchSnackbars(): void {
    this.notificationsService.notifications$.subscribe((notifications) => {
      const [notification] = notifications;

      if (notification) {
        this.snackBar.openFromComponent<CustomSnackbarComponent, CustomSnackbarData>(CustomSnackbarComponent, {
          data: {
            message: notification.message,
            type: this.snackbarTypes[notification.type],
          },
          panelClass: 'notification-overlay',
        });
      }
    });
  }

}
