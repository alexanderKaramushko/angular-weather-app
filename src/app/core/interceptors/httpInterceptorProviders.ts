import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiInterceptor } from './api.interceptor';
import { NotificationsInterceptor } from './notifications.interceptor';

export const httpInterceptorProviders = [
  {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
  },
  {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: NotificationsInterceptor,
  },
];
