import { UserService } from './../../shared';
import { UsersService } from './../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

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
    { field: 'teamName', header: 'Team name' },
    { field: 'class', header: 'Class' },
    { field: 'points', header: 'Points' },
    { field: 'money', header: 'Money' },
  ]
  operations: SelectItem[] = [
    { label: "contains", value:'contains'},
    { label: "starts with", value:'startsWith'},
    { label: "equals", value:'equals'},
    { label: "not equals", value:'notEquals'},
    { label: "less than", value:'lt'},
    { label: "less than or equals", value:'lte'},
    { label: "greater than", value:'gt'},
    { label: "greater than or equals", value:'gte'},
  ]
  filterByCol =  { field: 'name', header: 'Name' };
  filterOperation = 'contains';
  filterValue = '';
  @ViewChild("usersTable") usersTable;
  constructor(private usersService: UsersService, private userService:UserService) { 
    this.users$ = this.usersService.getUsers();

  }

  ngOnInit() {
  }

  resetPassword(userId){
    this.userService.resetPassword(userId);
  }

}
