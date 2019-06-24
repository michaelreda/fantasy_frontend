import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {
  userObjectives={
    "attendance":[
      {
        "objective":"Holy Mass (el odas)",
        "isDone":true,
        "points": 20
      },
      {
        "objective":"Monday (nady el kenisa)",
        "isDone":false,
        "points": 2
      }
    ],
    "memorizing":[
      {
        "objective":"Mazmoor 69 (اللهم التفت إلى معونتى)",
        "isDone":true,
        "points": 10
      },
      {
        "objective":"Mazmoor 66 (ليترأف الله علينا)",
        "isDone":false,
        "points": 20
      },
      {
        "objective":"ذكصولوجية الرسل ",
        "isDone":false,
        "points": 25,
        "href": "https://www.youtube.com/watch?v=A24b5qnBNpw"
      }
    ]
  };
  constructor() {}

  getUserObjectives(){
    return this.userObjectives;
  }
}
