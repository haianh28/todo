import { Injectable } from '@angular/core'; // chu ý import dung
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  constructor(
    private hardcodes : HardcodedAuthenticationService,
    private router : Router) { }
 canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
   if(this.hardcodes.isUserLoggedIn())
     return true;
     // bắt buộc phải login
     this.router.navigate(['login']);
   return false;
 }
}
