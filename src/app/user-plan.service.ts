import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

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
  constructor(private authenticationService:AuthenticationService, private confirmationService:ConfirmationService) {
    this._user = authenticationService.getUser();
  }

  getUserPlan(){
    return this._plan;
  }

  removePlayer(player){
    this.confirmationService.confirm({
      message: `Are you sure that you want to remove ${player.name} from your team?`,
      accept: () => {
        this._plan.players[player.position] = this._plan.players[player.position].map(function(id){
          if(player._id == id)
            return "";
          return id;
        });
      }
    });
    
  }

    

}
