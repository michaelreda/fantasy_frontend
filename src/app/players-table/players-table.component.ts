import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  selectedPlayerIDToGetHisInfo="";

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

  addPlayerToPlan(playerID){
    
  }
}
