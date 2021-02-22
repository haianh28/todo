import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(user,password){
    if(user==="haicntt28" && password==="cntt28"){
      sessionStorage.setItem('item',user)
      return true;
    }else{
      return false;
    }
  }
  // check use da dang nhap
  isUserLoggedIn() {
    let user = sessionStorage.getItem('item')
    return !(user === null)
  }

  // logOut
  logOut(){
    sessionStorage.removeItem('item')
  }
}
