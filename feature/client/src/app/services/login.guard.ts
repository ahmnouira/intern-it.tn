import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router) { }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if(! localStorage.getItem('token')) {
      this.router.navigate(['log-in']);
      return false;
    }

    return true
  }

  canActivateChild() {
    if( JSON.parse(localStorage.getItem('user')).account == "candiate") {
      this.router.navigate(['home']);
      return false;
    }
    return true;  
  } 

  
  
}