import { OnInit } from '@angular/core';
import { UserPlanService } from './../../shared';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {


  moneyRemaining = undefined;
  countPlayersSelected = 0;
  userPlan;
  changesMadeInPlan:Boolean =false;

  formatOptions=[
    {"label":"2-1-1","value":"2-1-1"},
    {"label":"1-2-1","value":"1-2-1"},
    {"label":"1-1-2","value":"1-1-2"}
  ];
  selectedFormat="2-1-1";

  Object=Object;

  constructor(private userPlanService:UserPlanService, private confirmationService:ConfirmationService) {  
    this.userPlanService.changesMadeInPlanObservable.subscribe(changesMadeInPlan=>{
      this.changesMadeInPlan= changesMadeInPlan;
    });
    this.userPlanService.planObservable.subscribe(plan=>{
      this.userPlan = plan;
      this.selectedFormat = this.userPlan.format;
      this.countPlayersSelected = this.userPlanService.getNumberOfPlayersInPlan();
    })

    this.userPlanService.moneyRemaingingObservable.subscribe(moneyRemaining=>{
      this.moneyRemaining=moneyRemaining;
    });
  }

  ngOnInit() {
  }
  
  formatChanged(newFormat){
    this.userPlanService.formatChanged(newFormat);
  }

  savePlan(){
    this.userPlanService.savePlan();
  }

  discardChanges(){
    this.confirmationService.confirm({
      message: "Are you sure you want to discard all the changes you made?",
      accept: () => {
        this.userPlanService.getUserPlan();
      }
    });
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
