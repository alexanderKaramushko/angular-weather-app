import { Component } from '@angular/core';

import { Notification, NotificationsService, NotificationType } from './core/services/notifications.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(public notifications: NotificationsService) { }

  alertNotificationTypes: Record<number, 'success' | 'danger'> = {
    [NotificationType.ERROR]: 'danger',
    [NotificationType.SUCCESS]: 'success',
  };

  // eslint-disable-next-line class-methods-use-this
  trackByMessage(item: Notification) {
    return item.message;
  }

}
