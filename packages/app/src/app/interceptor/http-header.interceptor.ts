import { TokenStorage } from './../storage/token.storage';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

/**
 * Http Interceptor will intercept all outgoing Http Requests and append the Authorization header to it.
 */
export class HttpHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenVal = new TokenStorage().getToken();

    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', tokenVal ? `Bearer ${tokenVal}` : '')
    });

    return next.handle(clonedRequest);
  }
}
