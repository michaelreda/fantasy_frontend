
import { HttpClient,HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  baseUrl = "https://rfc-fantasy-server.herokuapp.com"
  constructor(){
    if(window.location.origin.includes("localhost"))
      this.baseUrl = "http://localhost:8080";
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    req = req.clone({
      url: this.baseUrl + req.url
    });
    return next.handle(req);
  }
}