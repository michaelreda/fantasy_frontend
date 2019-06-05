import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserPlanService {
  private _user;
  private _plan={
    "format":"1-2-1",
    "players":{
      "goalkeeper": [],
      "defense": ["3"],
      "midfield":["",""],
      "attack":[""]
    }
  };
  constructor(private authenticationService:AuthenticationService) {
    this._user = authenticationService.getUser();
  }

  getUserPlan(){
    return this._plan;
  }

}
