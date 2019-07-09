import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users$;
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'username', header: 'Username' },
    { field: 'teamName', header: 'teamName' },
    { field: 'class', header: 'Class' },
    { field: 'points', header: 'Points' },
    { field: 'money', header: 'Money' },
  ]
  constructor(private usersService: UsersService) { 
    this.users$ = this.usersService.getUsers();

  }

  ngOnInit() {
  }

}
