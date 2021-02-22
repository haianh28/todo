import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password=""
  errorMessage="Invalid Credentials";
  invalidLogin= false
  constructor(private router : Router, 
    private hardcode: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
  //  if(this.username==="haicntt28" && this.password==="cntt28"){
    if(this.hardcode.authenticate(this.username,this.password)){
    this.router.navigate(['welcome',this.username])
    this.invalidLogin=false
   }else{
    this.invalidLogin=true
   }
  }


}
