import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LocalStorageService } from './core/services/local-storage.service';
import { NotificationsService, NotificationType } from './core/services/notifications.service';
import { AppState } from './core/store/core.store';
import { changeThemeAction } from './core/store/settings/settings.actions';
import { Theme } from './core/store/settings/settings.model';
import { themeSelector } from './core/store/settings/settings.selectors';
import {
  CustomSnackbarComponent,
  CustomSnackbarData,
  CustomSnackbarType,
} from './shared/components/custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  snackbarTypes: Record<number, CustomSnackbarType> = {
    [NotificationType.ERROR]: CustomSnackbarType.ERROR,
    [NotificationType.SUCCESS]: CustomSnackbarType.SUCCESS,
  };

  theme$: Observable<Theme>;

  themes = Theme;

  constructor(
    public notifications: NotificationsService,
    private snackBar: MatSnackBar,
    public store: Store<AppState>,
  ) {
    LocalStorageService.loadInitialState();
  }

  changeTheme(theme: Theme): void {
    this.store.dispatch(changeThemeAction({ theme }));
  }

  ngOnInit(): void {
    this.theme$ = this.store.select(themeSelector);

    this.notifications.notifications$.subscribe((notifications) => {
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

    this.theme$.subscribe((theme) => {
      Object.values(Theme).forEach((themeItem) => {
        document.body.classList.remove(themeItem);
      });

      document.body.classList.add(theme);
    });
  }

}
