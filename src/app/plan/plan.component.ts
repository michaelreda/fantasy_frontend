import { UserPlanService } from './../user-plan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  moneyRemaining = 100;
  countPlayersSelected = 0;
  userPlan;

  formatOptions=[
    {"label":"2-1-1","value":"2-1-1"},
    {"label":"1-2-1","value":"1-2-1"},
    {"label":"1-1-2","value":"1-1-2"}
  ];
  selectedFormat="2-1-1";

  Object=Object;

  constructor(private userPlanService:UserPlanService) {  
  }

  async ngOnInit() {
    this.userPlan = await this.userPlanService.getUserPlan();
    this.selectedFormat = this.userPlan.format;
    this.countPlayersSelected = this.userPlanService.getNumberOfPlayersInPlan();
  }

  formatChanged(newFormat){
    this.userPlan.format = newFormat;
    this.resizePosition("defense",newFormat.split("-")[0]);
    this.resizePosition("midfield",newFormat.split("-")[1]);
    this.resizePosition("attack",newFormat.split("-")[2]); 
  }

  resizePosition(position,newSize){
    let oldSize = this.userPlan.players[position].length;
    if(oldSize<newSize){
      this.userPlan.players[position].push("");
    }else if(oldSize>newSize){
      this.userPlan.players[position].pop();
    }
  }

  savePlan(){
    this.userPlanService.savePlan();
  }
  // if in one position there is more than one player .. then the others must be only one 
  // formatPlan(){
  //   let max=0;
  //   let positions = Object.keys(this.userPlan);
  //   for(let i=0;i<positions.length;i++){
  //     if(positions[i]=="goalkeeper")
  //       continue;
  //     if(this.userPlan[positions[i]].length>max)
  //       max = this.userPlan[positions[i]].length;
  //   }
  //   if(max < 2){
  //     for(let i=0;i<positions.length;i++){
  //       if(positions[i]=="goalkeeper")
  //         continue;
  //       while(this.userPlan[positions[i]].length<2){
  //         this.userPlan[positions[i]].push("");
  //       }
  //     }
  //   }else{
  //     for(let i=0;i<positions.length;i++){
  //       if(positions[i]=="goalkeeper")
  //         continue;
  //       while(this.userPlan[positions[i]].length<1){
  //         this.userPlan[positions[i]].push("");
  //       }
  //     }
  //   }
  // }

}
