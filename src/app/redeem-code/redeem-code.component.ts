import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redeem-code',
  templateUrl: './redeem-code.component.html',
  styleUrls: ['./redeem-code.component.css']
})
export class RedeemCodeComponent implements OnInit {

  code;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  redeemCode(code){
    this.userService.redeemCode(code);
    
    this.code ="";
  }

}
