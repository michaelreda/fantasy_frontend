import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user;

  userSubject: Subject<any> = new Subject<any>();
  userObservable: Observable<any>= this.userSubject.asObservable();

  constructor(private http:HttpClient) {
    http.get("/user").subscribe(user=>{
      this._user = user;
      this.userSubject.next(user)
    })
  }
}
