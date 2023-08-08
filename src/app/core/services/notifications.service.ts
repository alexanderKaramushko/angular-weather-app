import { Injectable } from '@angular/core';
import { interval, map, merge, scan, Subject, throttleTime } from 'rxjs';

export const enum NotificationType {
  ERROR,
  SUCCESS,
}

export type Notification = {
  type: NotificationType;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  notifications: Notification[] = [];

  private notifier$ = new Subject<Notification>();

  constructor() {
    merge(
      this.notifier$
        .pipe(
          throttleTime(100),
          map((notification) => [notification]),
          scan((previousNotifications, notification) => (
            [
              ...previousNotifications,
              ...notification,
            ]
          )),
        ),
      interval(2000),
    ).subscribe({
      next: (value) => {
        if (Array.isArray(value)) {
          this.notifications = value;
        } else {
          this.notifications = this.notifications.slice(1);
        }
      },
    });
  }

  notifySuccess(message: string) {
    this.notifier$.next({
      message,
      type: NotificationType.SUCCESS,
    });
  }

  notifyError(message: string) {
    this.notifier$.next({
      message,
      type: NotificationType.ERROR,
    });
  }

}
