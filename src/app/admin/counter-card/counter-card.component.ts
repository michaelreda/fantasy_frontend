import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.css']
})
export class CounterCardComponent implements OnInit {

  @Input() icon;
  @Input() count;
  @Input() text;
  constructor() { }

  ngOnInit() {
  }

}
