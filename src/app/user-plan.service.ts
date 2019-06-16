import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { DialogService } from './dialog.service';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { HostListener } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserPlanService {
  private _plan;
  userMoney;

  private _defaultPlan = {
    format: "1-2-1",
    players: {
      goalkeeper: [""],
      defense: [""],
      midfield: ["", ""],
      attack: [""]
    },
    cost:0
  };

  //used to confirm before closing without applying the new plan;
  changesMadeInPlanSubject: Subject<Boolean>= new Subject<Boolean>();
  changesMadeInPlanObservable: Observable<Boolean>  = this.changesMadeInPlanSubject.asObservable();
  
  planSubject: Subject<Boolean>= new Subject<any>();
  planObservable: Observable<Boolean>  = this.planSubject.asObservable();

  moneyRemainingSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  moneyRemaingingObservable: Observable<number>= this.moneyRemainingSubject.asObservable();

  constructor(
    private confirmationService: ConfirmationService,
    private userService:UserService,
    private dialogService: DialogService,
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.getUserPlan();

    this.userService.userObservable.subscribe(user=>{
      this.userMoney = user.money;
    })
  }

  getUserPlan() {
    this.http
      .get("/get_current_gameweek_plan")
      .subscribe(res => {
        if (res == null || res == undefined) {
          this._plan = this._defaultPlan;
        } else {
          this._plan = res;
          this._plan = this.formatPlayers(this._plan);
        }
        this.changesMadeInPlanSubject.next(false);
        this.planSubject.next(this._plan);
        this.moneyRemainingSubject.next(this.userMoney);
      });
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
        this.changesMadeInPlanSubject.next(true);
        this.planSubject.next(this._plan);
        // this._plan.cost -= player.price;
        this.moneyRemainingSubject.next(this.moneyRemainingSubject.getValue() + player.price);
      }
    });
  }

  addPlayerToPlan(player) {
    let playerPosition = player.position;
    let playerID = player._id;

    //check if player already exists
    if (this._plan.players[playerPosition].includes(playerID)) {
      this.dialogService.showDialog(
        "Player already exsists",
        `${player.name} already exists in your team.`
      );
      return;
    }

    //check if the maximum number of the players in the position is reached
    if (
      this.playersCountInPosition(player.position) ==
      this.getMaxNumberOfPlayersInPositionInTheFormat(player.position)
    ) {
      this.dialogService.showDialog(
        `Max number of ${player.position} players`,
        `You reached the maximum amount of ${
          player.position
        } players. You can either delete one of the ${
          player.position
        } players then add ${player.name} or change the your team format.`
      );
      return;
    }

    for (let i = 0; i < this._plan.players[player.position].length; i++) {
      if (this._plan.players[player.position][i] == "") {
        this._plan.players[player.position][i] = player._id;
        this.changesMadeInPlanSubject.next(true);
        break;
      }
    }
    this.planSubject.next(this._plan);
    // this._plan.cost += player.price;
    this.moneyRemainingSubject.next(this.moneyRemainingSubject.getValue() - player.price);
  }

  // if positon is defense and format is 2-1-1, the function returns 2
  private getMaxNumberOfPlayersInPositionInTheFormat(position) {
    if (position == "goalkeeper") return 1;
    let positionIndexInFormat;
    switch (position) {
      case "defense":
        positionIndexInFormat = 0;
        break;
      case "midfield":
        positionIndexInFormat = 1;
        break;
      case "attack":
        positionIndexInFormat = 2;
        break;
    }
    return parseInt(this._plan.format.split("-")[positionIndexInFormat]);
  }

  //transforms from defense,mid,.. to players:{def:["id",""],....}
  private formatPlayers(plan) {
    plan.players = {
      goalkeeper: this.formatPositionArraySize(plan.goalkeeper,this.getMaxNumberOfPlayersInPositionInTheFormat("goalkeeper")),
      defense: this.formatPositionArraySize(plan.defense,this.getMaxNumberOfPlayersInPositionInTheFormat("defense")),
      midfield: this.formatPositionArraySize(plan.midfield,this.getMaxNumberOfPlayersInPositionInTheFormat("midfield")),
      attack: this.formatPositionArraySize(plan.attack,this.getMaxNumberOfPlayersInPositionInTheFormat("attack"))
    };
    delete plan.goalkeeper;
    delete plan.defence;
    delete plan.midfield;
    delete plan.attack;

    return plan;
  }

  private formatPositionArraySize(arr, size) {
    while(arr.length<size){
      arr.push("");
    }
    return arr;
  }

  //returns current number of players in a position in the plan
  private playersCountInPosition(position) {
    let count = 0;
    for (let i = 0; i < this._plan.players[position].length; i++) {
      if (this._plan.players[position][i] != "") count++;
    }
    return count;
  }

  getNumberOfPlayersInPlan() {
    let count = 0;
    let allPlayers= [].concat(this._plan.players.goalkeeper,this._plan.players.defense,this._plan.players.midfield,this._plan.players.attack);
    for (var i=0;i<allPlayers.length;i++){
      if(allPlayers[i]!="")
        count ++;
    }
    return count;
  }

  savePlan() {
    //check for money
    if(this.moneyRemainingSubject.getValue()<0){
      this.messageService.add({severity:'error', summary:"You do not have enough money."});
      return;
    }

    this.http.post("/save_plan", this._plan).subscribe(async res => {
      console.log(res);
      await this.userService.getUser();
      await this.getUserPlan();
    });
  }

  formatChanged(newFormat){
    this._plan.format = newFormat;
    this.resizePosition("defense",newFormat.split("-")[0]);
    this.resizePosition("midfield",newFormat.split("-")[1]);
    this.resizePosition("attack",newFormat.split("-")[2]); 
    this.changesMadeInPlanSubject.next(true);
    this.planSubject.next(this._plan);
  }

  private resizePosition(position,newSize){
    let oldSize = this._plan.players[position].length;
    if(oldSize<newSize){
      this._plan.players[position].push("");
    }else if(oldSize>newSize){
      this._plan.players[position].pop();
    }
  }
}
