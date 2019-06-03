import { AuthenticationService } from './../authentication.service';
import { Injectable,Inject, Injector } from '@angular/core';

import { HttpClient,HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  
  private authenticationService:AuthenticationService;

  constructor( inj: Injector) { 
    setTimeout(() => {
      this.authenticationService=inj.get(AuthenticationService)
    })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken(); 
    if(this.authenticationService.isLoggedIn()){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(req);
  }
}