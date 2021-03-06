import { Component, OnInit } from '@angular/core';
import { ObjectivesService } from './services/objectives.service';

@Component({
  selector: 'objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit {

  userObjectives={}
  Object = Object; //used to iterate over object keys using its predefined function keys()
  constructor(private objectivesService: ObjectivesService) { 
    this.userObjectives = this.objectivesService.getUserObjectives();
  }

  ngOnInit() {
  }

}
