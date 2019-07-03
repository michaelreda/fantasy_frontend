
import { HttpClient,HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { tap } from 'rxjs/internal/operators/tap';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpResponseToastInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.errors){
            this.messageService.add({severity:'error', summary:evt.body.errors});
          } else if(evt.body && evt.body.success){
            this.messageService.add({severity:'success', summary:evt.body.success});
          }
        }
      })
    );
  }
}