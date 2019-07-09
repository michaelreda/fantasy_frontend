import { MessageService } from 'primeng/components/common/messageservice';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private http:HttpClient, private userService:UserService, private messageService:MessageService) { }

  redeemCode(code, cb){
    if(code.length != 8 && code.length != 12){
      this.messageService.add({severity:'error',summary:'Invalid code length'});
      return;
    }
    this.http.post("/redeem_code",{"code":code}).subscribe(res=>{
      if(res["newUserPoints"]){
        this.userService.setPoints(res["newUserPoints"]);
        this.userService.setMoney(res["newUserMoney"]);
        cb(res["codeValue"]);
      }
    });
  }


  inspectCode(code){
    return this.http.post("/inspect_code",{"code":code});
  }
}
