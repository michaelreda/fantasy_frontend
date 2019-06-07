import { UserPlanService } from './../user-plan.service';
import { PlayersService } from './../players.service';
import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  _player;
  selectedPlayerIDToGetHisInfo;
  @Input() position;
  @Input() set playerID(value){
    if(value){
      this.playersService.getPlayerByID(value).subscribe(player=>{
        this._player = player;
      });
    }else{
      this._player = undefined;
    }
  }
  constructor(private playersService:PlayersService, private userPlanService:UserPlanService) { }

  ngOnInit() {
  }

  removePlayer(){
    this.userPlanService.removePlayer(this._player);
  }

}
