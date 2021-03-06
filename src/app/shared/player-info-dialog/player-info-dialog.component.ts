import { PlayersService } from './../../shared';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-info-dialog',
  templateUrl: './player-info-dialog.component.html',
  styleUrls: ['./player-info-dialog.component.css']
})
export class PlayerInfoDialogComponent implements OnInit {
   isDialogVisible = false;
   _player;

  @Input() set playerID(value:string){
    if(value){
      this.playersService.getPlayerByID(value).subscribe(player=>{
        this._player= player;
        this.isDialogVisible = value.length != 0;
      });
    }
  }

  constructor(private playersService:PlayersService) { }

  ngOnInit() {
  }

  

}
