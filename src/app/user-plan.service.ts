import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPlanService {
  private _user;
  constructor(private authenticationService:AuthenticationService) {
    this._user = authenticationService.getUser();
    console.log(this._user);
   }
}
