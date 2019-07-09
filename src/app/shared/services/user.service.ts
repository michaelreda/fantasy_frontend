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
    this.getUser();
  }

  getUser(){
    this.http.get("/user").subscribe(user=>{
      this._user = user;
      this.userSubject.next(user)
    })
  }

  setPoints(points){
    this._user.points = points;
    this.userSubject.next(this._user);
  }

  setMoney(money){
    this._user.money = money;
    this.userSubject.next(this._user);
  }

  // redeemCode(code, cb){
  //   this.http.post("/redeem_code",{"code":code}).subscribe(res=>{
  //     if(res["newUserPoints"]){
  //       this._user.points = res["newUserPoints"];
  //       this._user.money = res["newUserMoney"];
  //       this.userSubject.next(this._user);
  //       cb(res["codeValue"]);
  //     }
  //   })
    
  // }

}
