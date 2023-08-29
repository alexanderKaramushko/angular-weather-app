import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, scan, startWith, switchMap, throttleTime } from 'rxjs';

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

  private notifier$ = new BehaviorSubject<Notification[]>([]);

  notifications$: Observable<Notification[]>;

  constructor() {
    this.notifications$ = this.notifier$.pipe(
      throttleTime(100),
      scan((previousNotifications, notifications) => (
        [
          ...previousNotifications,
          ...notifications,
        ]
      )),
      switchMap((notifications) => (
        interval(2000).pipe(
          startWith(0),
          map((i) => notifications.slice(i)),
        )
      )),
    );
  }

  notifySuccess(message: string) {
    this.notifier$.next([{
      message,
      type: NotificationType.SUCCESS,
    }]);
  }

  notifyError(message: string) {
    this.notifier$.next([{
      message,
      type: NotificationType.ERROR,
    }]);
  }

}
