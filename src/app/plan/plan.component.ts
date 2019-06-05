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

  constructor(private userPlanService:UserPlanService) {

  }

  ngOnInit() {
  }

}
