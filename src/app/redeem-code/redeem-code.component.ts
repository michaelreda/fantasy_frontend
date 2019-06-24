import { UserPlanService } from './../user-plan.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redeem-code',
  templateUrl: './redeem-code.component.html',
  styleUrls: ['./redeem-code.component.css']
})
export class RedeemCodeComponent implements OnInit {

  code;
  constructor(private userService: UserService, private userPlanService:UserPlanService) { }

  ngOnInit() {
  }

  redeemCode(code){
    var comp = this;
    var codeValue = this.userService.redeemCode(code, function(codeValue){
      comp.userPlanService.moneyRemainingSubject.next(comp.userPlanService.moneyRemainingSubject.getValue() + codeValue);
    });
    
    this.code ="";
  }

}
