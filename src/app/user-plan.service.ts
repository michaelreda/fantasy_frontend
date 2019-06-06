import { DialogService } from './dialog.service';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { HostListener } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class UserPlanService {
  private _user;
  private _plan = {
    format: "1-2-1",
    players: {
      goalkeeper: [""],
      defense: ["3"],
      midfield: ["", ""],
      attack: [""]
    }
  };

  changesMadeInPlan = false; //used to confirm before closing without applying the new plan;

  constructor(
    private authenticationService: AuthenticationService,
    private confirmationService: ConfirmationService,
    private dialogService:DialogService
  ) {
    this._user = authenticationService.getUser();
  }

  getUserPlan() {
    return this._plan;
  }

  removePlayer(player) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to remove ${
        player.name
      } from your team?`,
      accept: () => {
        this._plan.players[player.position] = this._plan.players[
          player.position
        ].map(function(id) {
          if (player._id == id) return "";
          return id;
        });
        this.changesMadeInPlan=true;
      }
    });
  }

  addPlayerToPlan(player) {
    let playerPosition = player.position;
    let playerID = player._id;

    // ========================================
    //TO DO check for money
    // ========================================
    

    //check if player already exists
    if (this._plan.players[playerPosition].includes(playerID)) {
      this.dialogService.showDialog("Player already exsists",`${player.name} already exists in your team.`);
      return;
    }

    //check if the maximum number of the players in the position is reached
    if(this.playersCountInPosition(player.position) == this.getMaxNumberOfPlayersInPositionInTheFormat(player.position)){
      this.dialogService.showDialog(`Max number of ${player.position} players`,`You reached the maximum amount of ${player.position} players. You can either delete one of the ${player.position} players then add ${player.name} or change the your team format.`);
      return;
    }

    

    for(let i=0;i<this._plan.players[player.position].length;i++){
      if(this._plan.players[player.position][i] == ""){
        this._plan.players[player.position][i] = player._id;
        this.changesMadeInPlan=true;
        break;
      }
    }
  }

  // if positon is defense and format is 2-1-1, the function returns 2
  getMaxNumberOfPlayersInPositionInTheFormat(position){
    if(position == "goalkeeper")
      return 1;
    let positionIndexInFormat;
    switch(position){
      case "defense": positionIndexInFormat=0;break;
      case "midfield": positionIndexInFormat=1;break;
      case "attack": positionIndexInFormat=2;break;
    }
    return parseInt( this._plan.format.split("-")[positionIndexInFormat] );
  }

  //returns current number of players in a position in the plan
  playersCountInPosition(position){
    let count=0;
    for(let i=0; i<this._plan.players[position].length;i++){
      if(this._plan.players[position][i]!="")
        count++;
    }
    return count;
  }
}
