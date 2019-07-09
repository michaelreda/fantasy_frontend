import { UserPlanService, CodeService } from './../../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redeem-code',
  templateUrl: './redeem-code.component.html',
  styleUrls: ['./redeem-code.component.css']
})
export class RedeemCodeComponent implements OnInit {

  code;
  constructor(private codeService:CodeService, private userPlanService:UserPlanService) { }

  ngOnInit() {
  }

  redeemCode(code){
    var comp = this;
    var codeValue = this.codeService.redeemCode(code, function(codeValue){
      comp.userPlanService.moneyRemainingSubject.next(comp.userPlanService.moneyRemainingSubject.getValue() + codeValue);
    });
    
    this.code ="";
  }

}
