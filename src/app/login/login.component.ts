import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="Trần Trung Hải";
  password="123456"
  errorMessage="Invalid Credentials";
  invalidLogin= false
  constructor(private router : Router) { }

  ngOnInit() {
  }

  handleLogin(){
   if(this.username==="haicntt28" && this.password==="cntt28"){
    this.router.navigate(['welcome',this.username])
    this.invalidLogin=false
   }else{
    this.invalidLogin=true
   }
  }


}
