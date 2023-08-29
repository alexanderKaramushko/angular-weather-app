import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, scan, switchMap, takeWhile, throttleTime } from 'rxjs';

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

  static createNotifierObservable(observable: Observable<Notification[]>) {
    return observable.pipe(
      throttleTime(100),
      scan((previousNotifications, notifications) => (
        [
          ...previousNotifications,
          ...notifications,
        ]
      )),
      switchMap((notifications) => (
        interval(2000).pipe(
          takeWhile((i) => i <= notifications.length),
          map((i) => notifications.slice(i)),
        )
      )),
    );
  }

  constructor() {
    this.notifications$ = NotificationsService.createNotifierObservable(this.notifier$);
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
