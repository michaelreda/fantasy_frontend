
import { HttpClient,HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'http://localhost:8080';
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}