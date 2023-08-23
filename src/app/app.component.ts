import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationsService, NotificationType } from './core/services/notifications.service';
import { CustomSnackbarComponent, CustomSnackbarData, CustomSnackbarType } from './shared/components/custom-snackbar/custom-snackbar.component';

enum Theme {
  DARK = 'black-theme',
  LIGHT = 'light-theme',
  NATURE = 'nature-theme',
  DEFAULT = 'default-theme',
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(public notifications: NotificationsService, private snackBar: MatSnackBar) { }

  snackbarTypes: Record<number, CustomSnackbarType> = {
    [NotificationType.ERROR]: CustomSnackbarType.ERROR,
    [NotificationType.SUCCESS]: CustomSnackbarType.SUCCESS,
  };

  // todo вынести управление настройками в feature
  theme = Theme.LIGHT;

  themes = Theme;

  ngOnInit(): void {
    this.notifications.notifications$.subscribe((notifications) => {
      const [notification] = notifications;

      if (notification) {
        // todo вынести управление показом в сервис
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
