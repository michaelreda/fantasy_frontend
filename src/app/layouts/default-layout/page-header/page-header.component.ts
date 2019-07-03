import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.css"]
})
export class PageHeaderComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home"
      },
      {
        label: "Daily Bible Reading",
        icon: "pi pi-fw pi-calendar-plus",
        url:"http://www.rosolfamily.com"
      }
    ];
  }
}
