import { PlayersService } from './../../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-radar-chart',
  templateUrl: './players-radar-chart.component.html',
  styleUrls: ['./players-radar-chart.component.css']
})
export class PlayersRadarChartComponent implements OnInit {
  playersData$: any;

  constructor(private playersService:PlayersService) {
    this.playersData$ = playersService.getPlayersChosenStats();
  }

  ngOnInit() {
  }

}
