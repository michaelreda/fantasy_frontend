import { PlayersService } from './../players.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  _player;
  selectedPlayerIDToGetHisInfo;
  @Input() set playerID(value){
    if(value){
      this._player = this.playersService.getPlayerByID(value);
    }
  }
  constructor(private playersService:PlayersService) { }

  ngOnInit() {
  }

}
