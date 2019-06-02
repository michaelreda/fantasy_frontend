import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register-fan-id",
  templateUrl: "./register-fan-id.component.html",
  styleUrls: ["./register-fan-id.component.css"]
})
export class RegisterFanIDComponent implements OnInit {
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  password2: String;
  class: String = "0";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  submit() {
    if (this.password != this.password2) {
      alert("Verified password should be the same as the password");
    } else if (this.firstName == "") {
      alert("Please enter your first name");
    } else if (this.lastName == "") {
      alert("Please enter your last name");
    } else if (this.username == "") {
      alert("Please enter a username");
    } else if (this.password == "") {
      alert("Please enter a password");
    } else if (this.class == "0") {
      alert("Please enter your class");
    } else {
      this.http
        .post("/signup", {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          confirmPassword: this.password2,
          class: this.class
        },{responseType:"text"})
        .subscribe(data => {
          console.log(data);
        });
      // this.http.post("https://api.mlab.com/api/1/databases/tazkarti/collections/users?apiKey=NfAwNomQ8kZmlVKuFU8Vx6ShVIgZLy_P",{
      //     name:this.name,
      //     username: this.username,
      //     password:this.password,
      //     mobile: this.mobile,
      //     team: this.team
      //   }).subscribe((data)=>{
      //     console.log(data);
      //   })
    }
  }
}
