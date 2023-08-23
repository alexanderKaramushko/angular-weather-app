import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationsService, NotificationType } from './core/services/notifications.service';
import { CustomSnackbarComponent, CustomSnackbarData, CustomSnackbarType } from './shared/components/custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(public notifications: NotificationsService, private _snackBar: MatSnackBar) { }

  snackbarTypes: Record<number, CustomSnackbarType> = {
    [NotificationType.ERROR]: CustomSnackbarType.ERROR,
    [NotificationType.SUCCESS]: CustomSnackbarType.SUCCESS,
  };

  ngOnInit(): void {
    this.notifications.notifications$.subscribe((notifications) => {
      const [notification] = notifications;

      if (notification) {
        // eslint-disable-next-line no-underscore-dangle
        this._snackBar.openFromComponent<CustomSnackbarComponent, CustomSnackbarData>(CustomSnackbarComponent, {
          data: {
            message: notification.message,
            type: this.snackbarTypes[notification.type],
          },
        });
      }
    });
  }

}
