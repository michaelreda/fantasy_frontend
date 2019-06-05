import { Injectable } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  
  dialogObservable: Observable<any>;
  dialogSubject: Subject<any>;
  constructor() {
    this.dialogSubject = new Subject<any>();
    this.dialogObservable = this.dialogSubject.asObservable();
   }

  showDialog(title,content){
    this.dialogSubject.next({
      title:title,
      content:content,
      isVisible:true
    })
  }
}
