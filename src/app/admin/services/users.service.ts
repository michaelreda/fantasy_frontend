import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersCount(className?:string){
    let usersCountEndPoint = "/users_count";
    if(className)
      usersCountEndPoint += "/"+className;
    return this.http.get(usersCountEndPoint);
  }

  getTotalMoneyAndPoints(className?:string){
    let totalMoneyEndPoint = "/users_total_money_points";
    if(className)
      totalMoneyEndPoint += "/"+className;
    return this.http.get(totalMoneyEndPoint);
  }

  getUsers(className?:string){
    let usersPoint = "/users";
    if(className)
      usersPoint += "/"+className;
    return this.http.get(usersPoint);
  }

}
