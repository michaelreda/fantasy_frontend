import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moneyRemaining = 100;
  playersSelected = 0;

  players=[
    {
      "id":"1",
      "name":"Michael Reda",
      "position":"midfield",
      "price":"30"
    },{
      "id":"2",
      "name":"Samuel Wasfei",
      "position":"goalkeeper",
      "price":"8"
    },{
      "id":"3",
      "name":"John Botros",
      "position":"defense",
      "price":"20"
    },{
      "id":"4",
      "name":"Youssef Sherif",
      "position":"attack",
      "price":"35"
    },{
      "id":"5",
      "name":"Mina Maher",
      "position":"attack",
      "price":"32"
    },{
      "id":"6",
      "name":"Abanob Wageh",
      "position":"midfield",
      "price":"36"
    },{
      "id":"7",
      "name":"Tony George",
      "position":"defense",
      "price":"25"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
