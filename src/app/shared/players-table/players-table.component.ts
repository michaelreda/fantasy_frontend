import { UserPlanService } from './../../shared';
import { PlayersService } from './../../shared';
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

  constructor(private playersService:PlayersService, private userPlanService:UserPlanService) {
    playersService.getPlayers().subscribe(players=>{
      this.players = players;
    });
   }

  ngOnInit() {
  }

  showPlayerInfoDialog(playerID){
    this.selectedPlayerIDToGetHisInfo = playerID;
  }

  addPlayerToPlan(player){
    this.userPlanService.addPlayerToPlan(player);
  }
}
