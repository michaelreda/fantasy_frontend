import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewOnly = false;
  viewUserId = undefined;

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if(params["user_id"]){
          this.viewOnly = true;
          this.viewUserId = params["user_id"];
        }
    });
  }

}
