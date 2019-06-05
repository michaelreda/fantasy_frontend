import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {
  userObjectives={
    "attendance":[
      {
        "objective":"Holy Mass",
        "isDone":true,
        "earns": 10
      },
      {
        "objective":"Monday",
        "isDone":false,
        "earns": 5
      }
    ],
    "memorizing":[
      {
        "objective":"Psalm 23",
        "isDone":true,
        "earns": 15
      },
      {
        "objective":"Ti shori",
        "isDone":false,
        "earns": 15
      }
    ]
  };
  constructor() {}

  getUserObjectives(){
    return this.userObjectives;
  }
}
