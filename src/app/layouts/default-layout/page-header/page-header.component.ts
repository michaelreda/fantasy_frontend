import { UserService } from './../../../shared';
import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.css"]
})
export class PageHeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      routerLink: "/home"
    },
    {
      label: "Daily Bible Reading",
      icon: "pi pi-fw pi-calendar-plus",
      url:"http://www.rosolfamily.com"
    }
  ];


  constructor(private userService: UserService) {
    
  }

  ngOnInit() { 
    this.userService.userObservable.subscribe(user=>{
      if(user.roles.length > 1){
        this.menuItems.push({
          label: "Admin",
          icon: "fa fa-id-badge",
          routerLink: "/admin"
        })
      }
    })
  }
}
