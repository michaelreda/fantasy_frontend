
import { HttpClient,HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  baseUrl = "https://rfc-fantasy-mirror.herokuapp.com"
  constructor(){
    this.baseUrl = window.location.origin;
    if(window.location.origin.includes("localhost"))
      this.baseUrl = "http://localhost:8080";
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    req = req.clone({
      url: this.baseUrl + '/api' + req.url
    });
    return next.handle(req);
  }
}