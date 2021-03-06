import { AuthenticationService } from './../shared';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  showLoginDialog: boolean = false;

  username="";
  password="";

  loggingIn = false; //used for showing and hiding progress bar

  errors=[];
  constructor(private http: HttpClient,private authenticationService:AuthenticationService, private router:Router) {
    if(this.authenticationService.isLoggedIn()){
      this.router.navigateByUrl("/home");
    }
   }

  ngOnInit() {
  }

  openLoginDialog(){
    this.showLoginDialog = true;
  }

  login(){
    this.errors = [];
    this.loggingIn = true;
      this.http
        .post("/login", {
          username: this.username,
          password: this.password
        })
        .subscribe(res => {
          if(res["errors"]){
            this.errors.push({severity:'error', detail:res["errors"][0].msg})
          }else if(res["msg"]){
            this.errors.push({severity:'error', detail:res["msg"]});
          }else if(res["JWT"]){
            if(res["JWT"]){
              this.authenticationService.saveToken(res["JWT"]);
              this.router.navigateByUrl("/home");
            }
          }else{
            this.errors.push({severity:'error', detail:"Unknown error."});
          }
          this.loggingIn = false;
        });
  }

}
