import { PlayersService } from './../players.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-info-dialog',
  templateUrl: './player-info-dialog.component.html',
  styleUrls: ['./player-info-dialog.component.css']
})
export class PlayerInfoDialogComponent implements OnInit {
  private isDialogVisible = false;
  private _player;

  @Input() set playerID(value:string){
    this._player= this.playersService.getPlayerByID(value);
    this.isDialogVisible = value.length != 0;
  }

  constructor(private playersService:PlayersService) { }

  ngOnInit() {
  }

  

}
