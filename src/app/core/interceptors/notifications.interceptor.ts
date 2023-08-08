import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

import { NotificationsService } from 'src/app/core/services/notifications.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationsInterceptor implements HttpInterceptor {

  constructor(private notifications: NotificationsService) { }

  // eslint-disable-next-line class-methods-use-this
  intercept(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: HttpRequest<any>,
    next: HttpHandler,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse && event.ok) {
          this.notifications.notifySuccess(`${event.url}: ${event.statusText}`);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.notifications.notifyError(`${error.url}: ${error.statusText}`);

        throw new Error(error.statusText);
      }),
    );
  }

}
