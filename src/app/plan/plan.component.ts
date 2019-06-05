import { UserPlanService } from './../user-plan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  moneyRemaining = 100;
  playersSelected = 0;
  userPlan;

  Object=Object;

  constructor(private userPlanService:UserPlanService) {
    this.userPlan = this.userPlanService.getUserPlan();
    this.formatPlan();
  }

  ngOnInit() {
  }

  // if in one position there is more than one player .. then the others must be only one 
  formatPlan(){
    let max=0;
    let positions = Object.keys(this.userPlan);
    for(let i=0;i<positions.length;i++){
      if(positions[i]=="goalkeeper")
        continue;
      if(this.userPlan[positions[i]].length>max)
        max = this.userPlan[positions[i]].length;
    }
    if(max < 2){
      for(let i=0;i<positions.length;i++){
        if(positions[i]=="goalkeeper")
          continue;
        while(this.userPlan[positions[i]].length<2){
          this.userPlan[positions[i]].push("");
        }
      }
    }else{
      for(let i=0;i<positions.length;i++){
        if(positions[i]=="goalkeeper")
          continue;
        while(this.userPlan[positions[i]].length<1){
          this.userPlan[positions[i]].push("");
        }
      }
    }
  }

}
