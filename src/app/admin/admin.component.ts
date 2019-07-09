import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usersCount$;
  totalMoney;
  totalPoints;
  constructor(private usersService: UsersService) {
    this.usersCount$ = usersService.getUsersCount();
    usersService.getTotalMoneyAndPoints().subscribe(res=>{
      this.totalMoney = res["totalMoney"];
      this.totalPoints = res["totalPoints"];
    });
  }

  ngOnInit() {
  }

}
