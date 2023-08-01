import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from 'src/app/core/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(private environment: EnvironmentService) { }

  // eslint-disable-next-line class-methods-use-this
  intercept(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: HttpRequest<any>,
    next: HttpHandler,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${this.environment.getValue('apiUrl')}${req.url}` });

    return next.handle(apiReq);
  }

}
