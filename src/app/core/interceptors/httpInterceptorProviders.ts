import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiInterceptor } from './api.interceptor';

export const httpInterceptorProviders = [
  {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
  },
];
