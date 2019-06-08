import { UserPlanService } from './../user-plan.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;
  plan;
  constructor(private userService:UserService,private userPlanService:UserPlanService) {
    this.userService.userObservable.subscribe(user=>{
      this.user = user;
    });
    this.userPlanService.planObservable.subscribe(plan=>{
      this.plan = plan;
    })
   }

  ngOnInit() {
  }

}
