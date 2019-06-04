import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedPlayerIDToGetHisInfo="";

  moneyRemaining = 100;
  playersSelected = 0;

  playersCols = [
    { field: 'name', header: 'Player' },
    { field: 'position', header: 'Position' },
    { field: 'price', header: 'Price' }
  ];


  players;

  constructor(private playersService:PlayersService) {
    this.players = playersService.getPlayers();
   }

  ngOnInit() {
  }

  showPlayerInfoDialog(playerID){
    this.selectedPlayerIDToGetHisInfo = playerID;
  }

}
