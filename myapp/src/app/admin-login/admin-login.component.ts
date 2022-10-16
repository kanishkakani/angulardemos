import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }
  LoginAdmin()
  {
    if(this.username=="admin" && this.password=="1234")
    {
      console.log("Welcome");
    }
  }

}
