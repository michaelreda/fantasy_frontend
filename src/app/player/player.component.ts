import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() id:string;
  constructor() { }

  ngOnInit() {
  }

}
