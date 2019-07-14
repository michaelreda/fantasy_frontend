import { FormsModule } from '@angular/forms';
import { UserPlanService } from './../../shared';
import { UserService } from './../../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;
  plan;

  showChangePasswordDialog = false;
  changePasswordDialogErrors=[];
  password;
  verifiedPassword;

  constructor(private userService:UserService,private userPlanService:UserPlanService) {
    this.userService.userObservable.subscribe(user=>{
      this.user = user;
      if(this.user.forgotPassword){
        this.showChangePasswordDialog = true;
      }
    });
    this.userPlanService.planObservable.subscribe(plan=>{
      this.plan = plan;
    })
   }

  ngOnInit() {
  }

  changePassword(password,verifiedPassword){
    this.changePasswordDialogErrors= [];
    if(password.length<4){
      this.changePasswordDialogErrors.push({severity:'error', summary:'Password should have at least a length of 4', detail:''})
      return;
    }
    if(password !== verifiedPassword){
      this.changePasswordDialogErrors.push({severity:'error', summary:'The 2 passwords are not the same', detail:''})
      return;
    }
    this.userService.changePassword(password).subscribe(res=>{
      this.showChangePasswordDialog = false;
    });
  }

}
